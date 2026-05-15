\---

name: aws-ecs-fargate-cicd

description: Plan, implement, validate, troubleshoot, and clean up deployments to AWS ECS Fargate using Docker, Amazon ECR, ECS task definitions, Application Load Balancer, ACM, DNS, and GitHub Actions self-hosted runners on EC2 with IAM instance profiles. Use when deploying web apps or APIs to ECS Fargate, creating deploy workflows, setting up AWS hosting from GitHub, fixing failed ECS deployments, configuring ALB/HTTPS/DNS, or reusing this deployment methodology in another project.

\---



\# AWS ECS Fargate CI/CD



\## Objetivo



Usa este skill para desplegar una aplicacion web o API en AWS ECS Fargate con una metodologia repetible:



1\. Dockerizar la aplicacion.

2\. Subir imagenes a Amazon ECR.

3\. Ejecutar servicios ECS Fargate detras de un ALB.

4\. Automatizar deploy desde GitHub Actions usando un runner EC2 con IAM instance profile.

5\. Validar health checks, logs, DNS, HTTPS y limpieza de residuos.



Mantener el skill reutilizable. No hardcodear IDs de cuenta, dominios, ARNs, subnets, secrets ni nombres reales fuera de ejemplos con placeholders.



\## Entradas requeridas



\- Cuenta AWS, region y permisos disponibles.

\- Repositorio GitHub (`owner/repo`) y rama de despliegue.

\- Slug del proyecto, por ejemplo `<project>`.

\- Tipo de app: frontend, backend/API, monolito o multiples servicios.

\- Dockerfile, comando build, comando start, puerto de contenedor y endpoint health, idealmente `/healthz`.

\- Variables runtime, secrets y variables build-time.

\- Dominio publico y proveedor DNS.

\- VPC, subnets y politica de red esperada: publica temporal o privada con NAT.



\## Arquitectura recomendada



\- ECR por servicio: `<project>-backend`, `<project>-frontend` o `<project>-web`.

\- ECS cluster: `<project>-production`.

\- Un servicio ECS Fargate por contenedor publicable.

\- ALB publico con target groups tipo `ip`.

\- Security group del ALB abierto en `80` y `443`.

\- Security group de ECS cerrado al publico; solo acepta trafico desde el SG del ALB en los puertos de contenedor.

\- CloudWatch Logs por servicio: `/ecs/<service-name>` con retention definida.

\- ACM en la misma region del ALB.

\- DNS externo con CNAME/ALIAS hacia el ALB; Route 53 con alias A/AAAA si la zona esta en AWS.

\- Runner GitHub autoalojado en EC2 con Docker, AWS CLI, Git y rol IAM por instance profile.



\## Flujo principal



1\. Inventariar el codigo:

&#x09;- Detectar package manager, build, start, puerto, variables y rutas criticas.

&#x09;- Confirmar que cada contenedor expone `/healthz` rapido y sin depender de base de datos.

&#x09;- Para frontend SPA detras del mismo ALB, preferir rutas API relativas (`/api/...`) y build-time env vacio cuando aplique.



2\. Preparar Docker:

&#x09;- Usar Dockerfile multi-stage.

&#x09;- Instalar solo dependencias necesarias en runtime.

&#x09;- Exponer el puerto real del contenedor.

&#x09;- Agregar `HEALTHCHECK` local contra `/healthz`.

&#x09;- Probar build local o en runner antes de confiar en ECS.



3\. Crear infraestructura AWS:

&#x09;- ECR repos con scan on push si esta disponible.

&#x09;- ECS cluster Fargate.

&#x09;- IAM execution role con `AmazonECSTaskExecutionRolePolicy` y permisos para leer secrets si se usan.

&#x09;- IAM task role minimo para la aplicacion.

&#x09;- Log groups.

&#x09;- ALB, listeners, target groups y security groups.

&#x09;- Task definitions iniciales. Si se usa tag bootstrap, subir primero una imagen real o aceptar que ECS fallara hasta el primer deploy.



4\. Configurar GitHub Actions:

&#x09;- Usar repository variables para configuracion no sensible:

&#x09;	- `AWS\_REGION`

&#x09;	- `AWS\_ACCOUNT\_ID`

&#x09;	- `ECS\_CLUSTER`

&#x09;	- `ECR\_REPOSITORY`

&#x09;	- `ECS\_SERVICE`

&#x09;	- `ECS\_TASK\_FAMILY`

&#x09;	- `ECS\_CONTAINER\_NAME`

&#x09;	- `DEPLOY\_BRANCH`

&#x09;	- Variables build-time como `VITE\_API` cuando aplique.

&#x09;- No guardar `AWS\_ACCESS\_KEY\_ID` ni `AWS\_SECRET\_ACCESS\_KEY` en GitHub.

&#x09;- Si el runner corre en EC2, usar instance profile y AWS CLI con credenciales IMDSv2.

&#x09;- Si no hay runner en AWS, OIDC puede ser alternativa, pero no mezclar ambos patrones sin necesidad.



5\. Crear runner autoalojado en EC2:

&#x09;- Usar Amazon Linux 2023 o Ubuntu LTS.

&#x09;- Instalar Docker, Git, AWS CLI, `jq`, `tar`, `gzip`, `unzip` y dependencias del runner.

&#x09;- Registrar un runner por repo o un runner group compartido con labels `self-hosted, linux, x64, aws-deploy`.

&#x09;- Instalarlo como servicio `systemd`.

&#x09;- Mantener version reciente del GitHub Actions Runner. Las actions modernas pueden requerir `node24`; versiones viejas fallan en `Set up job`.

&#x09;- Para builds pesados, usar al menos `t3.medium` y swap; `t3.small` puede quedar corto con builds Docker paralelos.



6\. Workflow de deploy:

&#x09;- Checkout.

&#x09;- Validar variables requeridas.

&#x09;- Resolver tag: `github.sha` por defecto, input manual opcional.

&#x09;- Login a ECR con `aws ecr get-login-password`.

&#x09;- Build y push con tags `github.sha` y `latest`.

&#x09;- Descargar task definition actual con `aws ecs describe-task-definition`.

&#x09;- Eliminar campos no registrables: `taskDefinitionArn`, `revision`, `status`, `requiresAttributes`, `compatibilities`, `registeredAt`, `registeredBy`.

&#x09;- Renderizar nueva imagen con `aws-actions/amazon-ecs-render-task-definition`.

&#x09;- Desplegar con `aws-actions/amazon-ecs-deploy-task-definition` y `wait-for-service-stability: true`.

&#x09;- Limpiar imagenes locales del runner.



\## ALB, rutas y HTTPS



\- Para un frontend y un backend compartiendo dominio:

&#x09;- Regla ALB backend: `path-pattern` debe incluir `/api` y `/api/\*`.

&#x09;- Accion default: frontend.

\- Antes de validar ACM, permitir HTTP 80 al ALB para pruebas.

\- Cuando ACM este `ISSUED`:

&#x09;- Crear listener HTTPS 443 con certificado.

&#x09;- Replicar reglas de path en HTTPS.

&#x09;- Cambiar listener HTTP 80 a redirect 301 hacia HTTPS.

\- Para DNS externo:

&#x09;- Crear CNAME de validacion ACM exactamente como lo entrega ACM.

&#x09;- `www` puede apuntar con CNAME al DNS del ALB.

&#x09;- Apex (`@`) requiere ALIAS/ANAME o Route 53 alias; si el proveedor no lo soporta, redirigir apex a `www`.



\## Secrets y datos externos



\- Preferir SSM Parameter Store `SecureString` o Secrets Manager y `secrets\[]` en task definition.

\- Si una SCP bloquea SSM/Secrets Manager, usar `environment\[]` solo como workaround temporal y documentar el riesgo.

\- No commitear `.env`, credenciales ni URI con passwords.

\- Para MongoDB Atlas:

&#x09;- Crear base de datos insertando una coleccion/documento inicial; MongoDB crea la DB al primer write.

&#x09;- Fargate con IP publica cambia de IP al redeploy. Para pruebas, Atlas puede usar `0.0.0.0/0`; para produccion, preferir salida fija con NAT Gateway/EIP o conectividad privada.

&#x09;- El health check no debe depender de Mongo para evitar reinicios por caidas transitorias de red o whitelist.



\## Validacion obligatoria



Antes o durante el deploy:



\- Ejecutar build/typecheck local del codigo modificado.

\- Confirmar que Docker build funciona si se tocaron Dockerfiles o dependencias.

\- Verificar runners online en GitHub.

\- Verificar que ECR tenga imagenes con el SHA esperado.



Despues del deploy:



\- `aws ecs describe-services` debe mostrar `runningCount == desiredCount`.

\- `aws elbv2 describe-target-health` debe mostrar targets `healthy`.

\- Probar ALB directo antes del DNS final:

&#x09;- `http://<alb-dns>/healthz`

&#x09;- `http://<alb-dns>/api` si hay backend.

\- Revisar CloudWatch Logs de cada servicio.

\- Confirmar workflows GitHub en `success`.

\- Cuando DNS/HTTPS esten listos, validar:

&#x09;- `https://<domain>/healthz`

&#x09;- `https://<domain>/api`

&#x09;- flujo funcional real de la app.



\## Troubleshooting rapido



\- `CannotPullContainerError ... :bootstrap not found`: no existe imagen inicial en ECR. Esperar primer workflow exitoso o subir una imagen bootstrap real.

\- Workflow falla en `Set up job` con `using: node24 is not supported`: actualizar GitHub Actions Runner.

\- Workflow queda en build y runner pasa offline: revisar EC2, memoria/CPU, Docker y servicio `actions.runner.\*`.

\- ECS queda `running=0` con imagen valida: revisar CloudWatch Logs; normalmente es crash runtime o secrets invalidos.

\- Backend cae por Mongo URI invalida: validar formato `mongodb://` o `mongodb+srv://` y password URL-encoded.

\- Mongo Atlas rechaza conexion: revisar Network Access/whitelist y recordar que IP publica de Fargate puede cambiar.

\- `/api` devuelve HTML del frontend: la regla ALB solo tiene `/api/\*`; agregar tambien `/api`.

\- ACM queda `PENDING\_VALIDATION`: revisar CNAME exactos, no duplicar el dominio si el proveedor lo agrega automaticamente.



\## Limpieza post-deploy



\- Terminar runners EC2 viejos que quedaron offline o reemplazados.

\- Confirmar que solo existen servicios ECS esperados.

\- Conservar task definitions antiguas si se necesita rollback; desregistrarlas solo si el usuario lo aprueba.

\- Revisar ECR para imagenes antiguas y definir lifecycle policy.

\- Revisar log groups y retention.

\- Validar que no haya target groups, ALBs, security groups o instancias huerfanas.



\## Reglas de seguridad



\- Nunca crear ni guardar access keys AWS en GitHub si hay instance profile u OIDC disponible.

\- Limitar `iam:PassRole` a los roles ECS necesarios.

\- Mantener el SG de ECS cerrado al publico.

\- No imprimir secrets en respuestas ni logs.

\- Usar tags inmutables (`github.sha`) para despliegues.

\- Documentar cualquier workaround temporal de secrets, IP publica o `0.0.0.0/0`.



\## PowerShell



\- No usar heredoc en comandos para Windows.

\- Usar archivos JSON, `ConvertTo-Json`, variables temporales o argumentos directos compatibles con PowerShell.

\- Evitar `\&\&`; usar `;` o comandos separados cuando la version de PowerShell no lo soporte.


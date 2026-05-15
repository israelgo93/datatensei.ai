# Despliegue AWS ECS Fargate para DataTensei AI

Dominio objetivo: `datatensei.ai`

Esta guia implementa el patron del skill local `skills/aws-ecs.md`: Docker, ECR, ECS Fargate, ALB, ACM, Route 53 y GitHub Actions con runner EC2 autoalojado e IAM instance profile.

## Recursos recomendados

Usar el slug `datatensei-ai`:

- ECR: `datatensei-ai-web`
- Cluster ECS: `datatensei-ai-production`
- Servicio ECS: `datatensei-ai-web`
- Task family: `datatensei-ai-web`
- Container name: `datatensei-ai-web`
- Target group: `datatensei-ai-web-tg`
- ALB: `datatensei-ai-web-alb`
- CloudWatch Logs: `/ecs/datatensei-ai-web`
- Health check: `/healthz`
- Container port: `3000`

## Route 53 y dominio

1. Comprar o transferir `datatensei.ai` en Route 53 Domains.
2. Crear hosted zone publica para `datatensei.ai`.
3. Solicitar certificado ACM en la misma region del ALB para:
   - `datatensei.ai`
   - `www.datatensei.ai`
4. Validar ACM con registros CNAME creados en la hosted zone.
5. Crear alias A/AAAA:
   - `datatensei.ai` -> ALB
   - `www.datatensei.ai` -> ALB
6. Configurar listener `443` con ACM y listener `80` redirigiendo a HTTPS.

## Variables de GitHub

Repository variables:

- `AWS_REGION`
- `AWS_ACCOUNT_ID`
- `AWS_ROLE_TO_ASSUME`
- `ECR_REPOSITORY`
- `ECS_CLUSTER`
- `ECS_SERVICE`
- `ECS_TASK_FAMILY`
- `ECS_CONTAINER_NAME`
- `NEXT_PUBLIC_SITE_URL`

Valores esperados para este proyecto:

- `ECR_REPOSITORY=datatensei-ai-web`
- `ECS_CLUSTER=datatensei-ai-production`
- `ECS_SERVICE=datatensei-ai-web`
- `ECS_TASK_FAMILY=datatensei-ai-web`
- `ECS_CONTAINER_NAME=datatensei-ai-web`
- `NEXT_PUBLIC_SITE_URL=https://datatensei.ai`

No guardar `AWS_ACCESS_KEY_ID` ni `AWS_SECRET_ACCESS_KEY` en GitHub. El workflow actual usa GitHub OIDC para asumir `AWS_ROLE_TO_ASSUME` desde un runner hospedado por GitHub. Si se habilita un runner EC2 autoalojado, tambien puede usarse con IAM instance profile y labels `self-hosted, linux, x64, aws-deploy`.

## Runner EC2

El runner debe tener labels:

- `self-hosted`
- `linux`
- `x64`
- `aws-deploy`

Instalar:

- Docker
- Git
- AWS CLI v2
- `jq`
- GitHub Actions Runner actualizado

El rol IAM del instance profile debe permitir:

- Login y push a ECR.
- `ecs:DescribeTaskDefinition`
- `ecs:RegisterTaskDefinition`
- `ecs:UpdateService`
- `ecs:DescribeServices`
- `iam:PassRole` limitado a los roles de ECS necesarios.
- Lectura de logs y recursos relacionados si se valida desde workflow.

## Validacion previa

En PowerShell:

```powershell
npm install
npm run lint
npm run typecheck
npm run build
docker build -t datatensei-ai-web:local .
docker run --rm -p 3000:3000 datatensei-ai-web:local
```

En otra terminal:

```powershell
Invoke-WebRequest http://127.0.0.1:3000/healthz
```

## Validacion posterior

- ECS service estable.
- Target group healthy.
- `https://datatensei.ai/healthz` retorna `200`.
- `https://datatensei.ai` carga la landing.
- `http://datatensei.ai` redirige a HTTPS.
- Logs sin errores en CloudWatch.
- No hay tasks viejas drenando indefinidamente.

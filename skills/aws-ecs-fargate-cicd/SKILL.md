---
name: aws-ecs-fargate-cicd
description: Despliegue de DataTensei AI y otros servicios del workspace en AWS ECS Fargate con Docker, ECR, ALB, ACM, Route 53 y GitHub Actions self-hosted runner en EC2 con IAM instance profile.
---

# AWS ECS Fargate CI/CD para DataTensei

Usa este skill cuando el proyecto necesite desplegar una aplicacion web o API de DataTensei en AWS ECS Fargate.

## Reglas

- No hardcodear account ids, ARNs, subnets, secrets ni dominios reales fuera de documentacion del proyecto.
- No usar `AWS_ACCESS_KEY_ID` ni `AWS_SECRET_ACCESS_KEY` en GitHub Actions.
- Preferir GitHub Actions self-hosted runner en EC2 con IAM instance profile, siguiendo `skills/aws-ecs.md`.
- El contenedor debe exponer un endpoint barato de health check, preferiblemente `/healthz`.
- Para Next.js usar `output: "standalone"` y Dockerfile multi-stage.
- El security group de ECS no debe estar abierto a internet; solo acepta trafico desde el security group del ALB.
- Para dominios en Route 53 usar alias A/AAAA al ALB.

## Flujo

1. Inventariar build, start, puerto, variables y health endpoint.
2. Preparar Dockerfile multi-stage y `.dockerignore`.
3. Crear ECR, ECS cluster, task definition, service, target group, ALB, ACM y Route 53.
4. Configurar runner EC2 con labels `self-hosted, linux, x64, aws-deploy`.
5. Configurar repository variables no sensibles en GitHub.
6. Crear workflow de deploy que build/push imagen, renderice task definition y actualice ECS.
7. Validar build local, task healthy, ALB HTTPS, DNS y CloudWatch logs.

## Valores DataTensei AI

- Project slug: `datatensei-ai`
- Domain: `datatensei.ai`
- ECR: `datatensei-ai-web`
- ECS cluster: `datatensei-ai-production`
- ECS service: `datatensei-ai-web`
- Task family: `datatensei-ai-web`
- Container name: `datatensei-ai-web`
- Port: `3000`
- Health check: `/healthz`

## Archivos del proyecto

- `Dockerfile`
- `.dockerignore`
- `.github/workflows/deploy-ecs.yml`
- `docs/deployment/aws-ecs-fargate.md`
- `src/app/healthz/route.ts`

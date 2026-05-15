import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link className="text-sm text-muted" href="/">
        Volver a DataTensei AI
      </Link>
      <h1 className="mt-8 text-4xl font-semibold tracking-[-0.05em]">Terminos</h1>
      <div className="mt-8 space-y-5 text-sm leading-7 text-muted">
        <p>
          Este sitio presenta la oferta comercial y el portafolio de DataTensei AI. Los servicios, alcances, precios, soporte y obligaciones se acuerdan por propuesta o contrato especifico.
        </p>
        <p>
          Las marcas, productos y repositorios enlazados pueden tener terminos o licencias propias. Los proyectos open source se rigen por la licencia definida en cada repositorio.
        </p>
      </div>
    </main>
  );
}

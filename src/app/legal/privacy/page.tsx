import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link className="text-sm text-muted" href="/">
        Volver a DataTensei AI
      </Link>
      <h1 className="mt-8 text-4xl font-semibold tracking-[-0.05em]">Politica de privacidad</h1>
      <div className="mt-8 space-y-5 text-sm leading-7 text-muted">
        <p>
          DataTensei AI usa este sitio para presentar servicios, productos y medios de contacto. Los datos enviados por correo, telefono o formularios futuros se utilizaran exclusivamente para responder solicitudes comerciales o tecnicas.
        </p>
        <p>
          No se deben enviar credenciales, claves privadas ni informacion sensible por canales no cifrados. Cuando un producto requiera datos operativos, se documentara su tratamiento en la politica especifica del producto.
        </p>
      </div>
    </main>
  );
}

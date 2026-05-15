interface DtMarkProps {
  className?: string;
}

export function DtMark({ className }: DtMarkProps) {
  return (
    <svg className={className} role="img" aria-label="DataTensei DT" viewBox="0 0 88 64" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 8h25.5C47.4 8 57 17.72 57 32c0 14.28-9.6 24-23.5 24H8V8Zm14 13v22h11.2C39.2 43 43 38.86 43 32c0-6.86-3.8-11-9.8-11H22Z"
        fill="currentColor"
      />
      <path
        d="M51 8h31v13H72v35H58V21h-7V8Z"
        fill="currentColor"
      />
    </svg>
  );
}

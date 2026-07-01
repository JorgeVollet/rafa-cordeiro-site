import { Card } from "@/components/ui/Card";
import { ShieldCheckIcon } from "@/components/ui/icons";

export function Login() {
  return (
    <div className="container-x flex flex-1 items-center justify-center py-20">
      <Card className="w-full max-w-md text-center" padding="lg">
        <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-azul-suave text-azul-escuro">
          <ShieldCheckIcon size={28} />
        </div>
        <h1 className="mt-5 text-xl font-semibold text-tinta">
          Painel administrativo
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-tinta-2">
          O login protegido (Supabase Auth) e o gerenciamento de matérias serão
          implementados na <strong className="text-azul-escuro">Fase 5</strong>.
        </p>
        <div className="mt-6 rounded-xl bg-fundo-suave p-4 text-left text-xs text-tinta-2">
          Apenas o e-mail do Dr. Rafael terá acesso. Leitura pública só de posts
          publicados (Row Level Security).
        </div>
      </Card>
    </div>
  );
}

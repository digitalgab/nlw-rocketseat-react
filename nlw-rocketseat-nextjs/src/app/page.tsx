import { Button } from "./components/button";
import { ArrowRight, Copy } from "lucide-react";
import { IconButton } from "./components/icon-button";
import { Input } from "./components/input";

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <Input type="email" placeholder="E-mail" error/>
    </main>
  );
}

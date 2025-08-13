import { Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#030712] text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"> 
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2 ">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Livro Colorindo com Jesus by Pequeninos™ 
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md text-[#64748b]">
              Transformando vidas através da arte e da fé. Nossa missão é levar
              paz e tranquilidade para famílias cristãs através de livros de
              colorir inspiradores.
            </p>
            <div className="flex items-center text-sm text-muted-foreground text-[#64748b]">
              <Heart className="w-4 h-4 mr-2 text-destructive text-red-500" />
              Feito com amor para famílias cristãs
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground text-[#64748b]">
                <Mail className="w-4 h-4 mr-2 text-white" />
                pequeninostm@gmail.com
              </li>
              <li className="flex items-center text-muted-foreground text-[#64748b]">
                <Phone className="w-4 h-4 mr-2 text-white" />
                (11) 98825-4014
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-border text-[#64748b]">
          <p className="text-muted-foreground text-sm">
            © 2025 | Livro Colorindo com Jesus by Pequeninos™. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

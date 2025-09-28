import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard"; 
import ticketGeneratorImage from "app/components/projectPreviewImages/ticketGenerator.png";
import ageCalculatorImage from "app/components/projectPreviewImages/ageCalculator.png";

export default function Home() {
  return (
    <main>
      <Header />
      
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Projetos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <ProjectCard
            title="Gerador de Tickets"
            description="Uma página simples, que implementa o front end para uma página de gerar tickets para uma conferência de programação (Projeto Proposto pelo Frontend Mentor)." // **SUBSTITUA**
            imageUrl={ticketGeneratorImage}
            githubUrl="https://github.com/Rickdebarro/TicketGenerator-FullStack"
            liveUrl="https://ticket-generator.rickdebarro.tech"
          />

          <ProjectCard
            title="Calculadora de Idade"
            description="Este Projeto consiste em uma calculadora de idade, que exibe o tempo decorrido desde a data inserida pelo usuário (Projeto Proposto pelo Frontend Mentor)." // **SUBSTITUA**
            imageUrl={ageCalculatorImage}
            githubUrl="https://github.com/Rickdebarro/age-calculator-react"
            liveUrl="https://age-calculator.rickdebarro.tech"
          />
          
        </div>
      </div>
    </main>
  );
}
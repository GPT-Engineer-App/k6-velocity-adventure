import { Cat, Paw, Heart, Eye, Volume2, Facebook, Twitter, Instagram } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature" },
    { name: "Maine Coon", description: "Large, fluffy cats with tufted ears" },
    { name: "Persian", description: "Recognizable by their flat faces and long, luxurious coats" },
    { name: "Bengal", description: "Wild-looking cats with leopard-like spots" },
  ];

  const catCharacteristics = [
    { icon: <Paw className="h-8 w-8" />, title: "Agile Hunters", description: "Sharp claws and teeth" },
    { icon: <Heart className="h-8 w-8" />, title: "Flexible", description: "Bodies with quick reflexes" },
    { icon: <Eye className="h-8 w-8" />, title: "Keen Senses", description: "Excellent hearing and night vision" },
    { icon: <Volume2 className="h-8 w-8" />, title: "Communicative", description: "Through vocalizations and body language" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="relative h-96 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white mb-6 flex items-center">
            <Cat className="mr-4 h-12 w-12" /> All About Cats
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-xl mb-8 text-center">
          Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their independence, agility, and affectionate nature.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-center">Characteristics of Cats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {catCharacteristics.map((char, index) => (
            <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <div className="mb-4">{char.icon}</div>
                <h3 className="font-semibold mb-2">{char.title}</h3>
                <p>{char.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-center">Popular Cat Breeds</h2>
        <Accordion type="single" collapsible className="mb-12">
          {catBreeds.map((breed, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{breed.name}</AccordionTrigger>
              <AccordionContent>{breed.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Fun Fact</h2>
            <p>Did you know? Cats sleep for about 70% of their lives. That's about 13-16 hours a day!</p>
          </CardContent>
        </Card>

        <footer className="text-center">
          <p className="mb-4">Follow us for more cat content:</p>
          <div className="flex justify-center space-x-4">
            <Facebook className="h-6 w-6 cursor-pointer" />
            <Twitter className="h-6 w-6 cursor-pointer" />
            <Instagram className="h-6 w-6 cursor-pointer" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;

import { useState } from "react";
import { motion } from "framer-motion";
import { Cat, Paw, Heart, Eye, Volume2, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
    { name: "Maine Coon", description: "Large, fluffy cats with tufted ears", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
    { name: "Persian", description: "Recognizable by their flat faces and long, luxurious coats", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
    { name: "Bengal", description: "Wild-looking cats with leopard-like spots", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
  ];

  const catCharacteristics = [
    { icon: <Paw className="h-8 w-8" />, title: "Agile Hunters", description: "Sharp claws and teeth" },
    { icon: <Heart className="h-8 w-8" />, title: "Flexible", description: "Bodies with quick reflexes" },
    { icon: <Eye className="h-8 w-8" />, title: "Keen Senses", description: "Excellent hearing and night vision" },
    { icon: <Volume2 className="h-8 w-8" />, title: "Communicative", description: "Through vocalizations and body language" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-200">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-6 flex items-center justify-center">
            <Cat className="mr-4 h-16 w-16" /> All About Cats
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover the fascinating world of felines. From their mysterious behaviors to their adorable quirks, 
            explore everything there is to know about our purr-fect companions.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Explore More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-purple-800"
        >
          Characteristics of Cats
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {catCharacteristics.map((char, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="text-center p-6 hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent>
                  <motion.div 
                    className="mb-4 text-purple-600"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {char.icon}
                  </motion.div>
                  <h3 className="font-semibold mb-2 text-lg">{char.title}</h3>
                  <p className="text-gray-600">{char.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-purple-800"
        >
          Popular Cat Breeds
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {catBreeds.map((breed, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-lg">{breed.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{breed.description}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{breed.name}</DialogTitle>
                      </DialogHeader>
                      <img src={breed.image} alt={breed.name} className="w-full h-64 object-cover rounded-md mb-4" />
                      <p>{breed.description}</p>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Fun Fact</h2>
              <p className="text-xl">Did you know? Cats sleep for about 70% of their lives. That's about 13-16 hours a day!</p>
            </CardContent>
          </Card>
        </motion.div>

        <footer className="text-center">
          <p className="mb-4 text-lg">Follow us for more cat content:</p>
          <div className="flex justify-center space-x-6">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Facebook className="h-8 w-8 cursor-pointer text-blue-600" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Twitter className="h-8 w-8 cursor-pointer text-blue-400" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Instagram className="h-8 w-8 cursor-pointer text-pink-600" />
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;

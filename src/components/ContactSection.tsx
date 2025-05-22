
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, Phone } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission:', formData);
    
    // In a real app, you'd send this to your backend
    // For demo purposes, we'll just show a success toast
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-portfolio-blue-dark">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-portfolio-blue" />
                <a href="mailto:sahand.sorouri@gmail.com" className="text-gray-700 hover:text-portfolio-blue">
                  sahand.sorouri@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-portfolio-blue" />
                <a href="tel:+971526058752" className="text-gray-700 hover:text-portfolio-blue">
                  +971 52 605 8752
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Linkedin className="text-portfolio-blue" />
                <a 
                  href="https://www.linkedin.com/in/sahand-sorouri/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-portfolio-blue"
                >
                  linkedin.com/in/sahand-sorouri
                </a>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <p>Dubai, UAE (Open to relocation)</p>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-200">
            <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="Your Name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="min-h-[150px]" 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full bg-portfolio-blue hover:bg-portfolio-blue-dark">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

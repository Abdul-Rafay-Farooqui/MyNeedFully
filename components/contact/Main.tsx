"use client";
import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useToast } from '@/hooks/use-toast';

const Main = () => {
  
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon!",
        duration: 5000,
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <div>
        <section className="page-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in">
              <h2 className="mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                If you have any questions, concerns, or feedback about MyNeedfully, please don't hesitate to reach out. We're here to support you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">support@myneedfully.com</p>
                    <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Call Us</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Monday to Friday, 9AM-5PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Our Location</h3>
                    <p className="text-muted-foreground">123 Helping Hand Street</p>
                    <p className="text-muted-foreground">Compassion City, ST 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in animation-delay-200">
              <div className="bg-card rounded-xl shadow-subtle p-8 border border-border">
                <h2 className="text-2xl font-medium mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your question or concern..."
                      rows={5}
                      required
                      className="resize-none"
                    />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main
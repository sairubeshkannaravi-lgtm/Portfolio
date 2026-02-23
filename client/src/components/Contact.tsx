import { SectionHeading } from "./SectionHeading";
import { Mail, MapPin, Phone, Calendar, GraduationCap } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind or want to discuss data analytics? I'd love to hear from you."
          centered 
        />

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Me</h4>
                    <a href="https://mail.google.com/mail/?view=cm&to=sairubeshkannaravi@gmail.com" target="_blank">
                      sairubeshkannaravi@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">Gobichettipalayam, Erode</p>
                    <p className="text-muted-foreground">Available for Remote Work</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+91-9876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91-6374831608
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl border border-border/50 h-full">
                <h3 className="text-2xl font-display font-bold mb-6">Professional Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Education</h4>
                      <p className="text-muted-foreground">MCA Student</p>
                      <p className="text-muted-foreground">K.S.R College of Engineering</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Availability</h4>
                      <p className="text-muted-foreground">Open to Internships</p>
                      <p className="text-muted-foreground">Available for Freelance Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/10">
            <h3 className="text-xl font-bold mb-2">Let's Collaborate</h3>
            <p className="text-muted-foreground mb-4">
              I'm actively seeking opportunities in data analytics, machine learning, and business intelligence. 
              Whether you have a project idea, want to discuss analytics solutions, or explore potential collaborations, 
              I'm excited to connect and explore possibilities.
            </p>
            <div className="h-1 w-full bg-gradient-to-r from-primary to-transparent rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}

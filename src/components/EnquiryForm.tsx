import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { COURSES } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  mobile: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid mobile number"),
  email: z.string().trim().email("Enter a valid email").max(160),
  course: z.string().min(1, "Please select a course"),
  message: z.string().trim().max(600).optional(),
});

type EnquiryValues = z.infer<typeof schema>;

interface EnquiryFormProps {
  compact?: boolean;
  title?: string;
  description?: string;
}

export const EnquiryForm = ({ compact, title = "Make an Enquiry", description = "Free counselling — get a callback within 24 hours." }: EnquiryFormProps) => {
  const form = useForm<EnquiryValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", mobile: "", email: "", course: "", message: "" },
  });

  const onSubmit = async (values: EnquiryValues) => {
    // Frontend-only handler — wire to backend later.
    await new Promise((r) => setTimeout(r, 700));
    console.log("[Enquiry submission]", values);
    toast.success("Thanks! We'll call you back within 24 hours.", {
      description: `${values.name} — ${values.course}`,
    });
    form.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`glass rounded-3xl p-6 sm:p-8 ${compact ? "" : "shadow-elegant"}`}
    >
      <div className="mb-5">
        <h3 className="font-display font-bold text-2xl text-secondary">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" className="rounded-xl h-11" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 9XXXXXXXXX" className="rounded-xl h-11" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" className="rounded-xl h-11" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interested Course</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-xl h-11">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {COURSES.map((c) => (
                      <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>
                    ))}
                    <SelectItem value="Other">Other / Not sure</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message <span className="text-muted-foreground font-normal">(optional)</span></FormLabel>
                <FormControl>
                  <Textarea rows={3} placeholder="Tell us a bit about your goals…" className="rounded-xl resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full h-12 rounded-xl bg-gradient-cta hover:opacity-90 shadow-glow font-semibold text-base"
          >
            {form.formState.isSubmitting ? (
              <><Loader2 className="animate-spin" /> Sending…</>
            ) : (
              <><Send /> Submit Enquiry</>
            )}
          </Button>
          <p className="text-[11px] text-muted-foreground text-center">
            By submitting, you agree to be contacted by Navyukti Consultancy.
          </p>
        </form>
      </Form>
    </motion.div>
  );
};

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button.tsx";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Mail, MessageSquare, User } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  message: z.string(),
});

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast("Your form has been submitted successfully", {
        duration: 2000,
      });
      form.reset({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div
      className={
        "intersect-once md:intersect:-motion-translate-y-in-25 md:motion-delay-200 md:w-[60%] bg-background border border-white/20 backdrop-blur-sm rounded-2xl shadow-2xs m-4 p-4"
      }
    >
      <h1 className={"text-white text-2xl md:text-4xl font-bold text-center"}>
        Send a form
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className={"flex gap-2"}>
                  <User size={16} className={"text-white"} />
                  <FormLabel className={"text-white"}>Name</FormLabel>
                </div>
                <FormControl>
                  <Input
                    className={
                      "text-white border-primary/70 focus-visible:border-primary focus-visible:ring-0 focus-visible:shadow-xs focus-visible:shadow-primary"
                    }
                    placeholder={"Your name"}
                    required={true}
                    type="text"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className={"flex gap-2"}>
                  <Mail size={16} className={"text-white"} />
                  <FormLabel className={"text-white"}>Email </FormLabel>
                </div>
                <FormControl>
                  <Input
                    required={true}
                    className={
                      "text-white border-primary/70 focus-visible:border-primary focus-visible:ring-0 focus-visible:shadow-xs focus-visible:shadow-primary"
                    }
                    placeholder="Your email address"
                    type="email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <div className={"flex gap-2"}>
                  <MessageSquare size={16} className={"text-white"} />
                  <FormLabel className={"text-white"}>Message</FormLabel>
                </div>
                <FormControl>
                  <Textarea
                    required={true}
                    placeholder="Tell me about anything you want to share"
                    className="resize-none text-white border-primary/70 focus-visible:border-primary focus-visible:ring-0 focus-visible:shadow-xs focus-visible:shadow-primary"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  I'll contact you via your email address ASAP.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className={
              "w-[100%] shadow-lg hover:shadow-primary/50 hover:scale-100 duration-200"
            }
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;

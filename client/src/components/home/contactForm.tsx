import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { Mail, MessageSquare, User } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button.tsx';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import axios from '@/api/axios';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  message: z.string(),
});

function ContactForm() {
  const [sended, setSended] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit() {
    setSended(true);
    axios
      .post('/portfolio/contact', form.getValues())
      .then((res) => {
        if (res.status === 201) {
          toast.success('Contact form submitted successfully!');
          form.reset({ name: '', email: '', message: '' });
        } else {
          toast.error('Failed to submit contact form. Please try again later.');
        }
      })
      .catch((e) => {
        if(e.response?.status === 429) {
          toast.error('Contact form submission limit reached. Please try again later.');
          return;
        }
        toast.error('Failed to submit contact form. Please try again later.');
      })
      .finally(() => {
        setSended(false);
      });
  }

  return (
    <section
      className={
        'intersect-once md:intersect:-motion-translate-y-in-25 md:w-[60%] bg-background border border-white/20 backdrop-blur-sm rounded-2xl shadow-2xs m-4 p-4'
      }
    >
      <h1 className={'text-white text-2xl md:text-4xl font-bold text-center'}>
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
                <div className={'flex gap-2'}>
                  <User size={16} className={'text-white'} />
                  <FormLabel className={'text-white'}>Name</FormLabel>
                </div>
                <FormControl>
                  <Input
                    className={
                      'text-white border-primary/70 focus-visible:border-primary focus-visible:ring-0 focus-visible:shadow-xs focus-visible:shadow-primary placeholder:text-gray-300'
                    }
                    placeholder={'Your name'}
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
                <div className={'flex gap-2'}>
                  <Mail size={16} className={'text-white'} />
                  <FormLabel className={'text-white'}>Email </FormLabel>
                </div>
                <FormControl>
                  <Input
                    required={true}
                    className={
                      'text-white border-primary/70 focus-visible:border-primary focus-visible:ring-0 focus-visible:shadow-xs focus-visible:shadow-primary placeholder:text-gray-300'
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
                <div className={'flex gap-2'}>
                  <MessageSquare size={16} className={'text-white'} />
                  <FormLabel className={'text-white'}>Message</FormLabel>
                </div>
                <FormControl>
                  <Textarea
                    required={true}
                    placeholder="Tell me about anything you want to share"
                    className="resize-none text-white border-primary/70 focus-visible:border-primary focus-visible:ring-0 focus-visible:shadow-xs focus-visible:shadow-primary placeholder:text-gray-300"
                    {...field}
                  />
                </FormControl>
                <FormDescription className='text-gray-300'>
                  I'll contact you via your email address ASAP.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={!form.formState.isValid || sended}
            className={
              'w-[100%] shadow-lg hover:shadow-primary/50 hover:scale-[101%] active:scale-[99%] duration-200 cursor-pointer'
            }
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}

export default ContactForm;

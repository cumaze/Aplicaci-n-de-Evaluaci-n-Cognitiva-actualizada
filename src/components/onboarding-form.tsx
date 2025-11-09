'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CAREERS, LEVELS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { startAssessmentAction } from '../app/actions';
import type { Question, UserData } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }),
  career: z.string({ required_error: 'Por favor, selecciona una carrera.' }),
  level: z.string({ required_error: 'Por favor, selecciona tu nivel de experiencia.' }),
});

type OnboardingFormProps = {
  onStartAssessment: (userData: UserData, questions: Question[]) => void;
};

export default function OnboardingForm({ onStartAssessment }: OnboardingFormProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const result = await startAssessmentAction({ career: values.career, level: values.level });
    setLoading(false);

    if (result.success && result.questions) {
      const selectedCareer = CAREERS.find(c => c.key === values.career);
      onStartAssessment({ ...values, area: selectedCareer?.area || '' }, result.questions);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error al iniciar la evaluación',
        description: result.error || 'Ocurrió un error al generar las preguntas. Por favor, intenta de nuevo.',
      });
    }
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="font-headline">Bienvenido/a</CardTitle>
        <CardDescription>Completa tus datos para comenzar la evaluación de competencias.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} />
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
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="tu@correo.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="career"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Carrera / Área</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu carrera" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CAREERS.map((career) => (
                        <SelectItem key={career.key} value={career.key}>
                          {career.key} - <span className="text-muted-foreground">{career.area}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nivel de Experiencia</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu nivel" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {LEVELS.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading} className="w-full sm:w-auto ml-auto bg-accent text-accent-foreground hover:bg-accent/90">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Comenzar Evaluación
            </Button>
          </CardFooter>
        </form>
      </Form>
    </>
  );
}
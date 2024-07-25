import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    Input
  } from '@hanzo/ui/primitives'
  
  import type { ContactFormType } from '@/type'
   
  const ContactForm: React.FC<{
    form: ContactFormType,
  }> = ({
    form,
  }) => (
    <Form {...form}>
      <form className='text-left'>
        <div className='flex flex-col gap-1 sm:gap-2'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input {...field} placeholder='Full name'/>
                </FormControl>
                <FormMessage className='py-0 space-y-0 !m-0'/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input {...field} placeholder='Email'/>
                </FormControl>
                <FormMessage className='py-0 space-y-0 !m-0'/>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  )
  
  export default ContactForm
  
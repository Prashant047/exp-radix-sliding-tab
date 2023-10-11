import { ReactNode } from "react"

interface TabData {
  title: string,
  content: ReactNode
}

const tabData: TabData[] = [
  {
    title: 'Table Editor',
    content: (
    <>
      <h1 className='text-neutral-100 text-xl mb-4'>
        Manage your data with the familiarity of a spreadsheet
      </h1>

      <p className='text-neutral-300 text-sm'>
        You don’t have to be a database expert to use Supabase. 
        Our table editor makes Postgres easy to use, even for 
        non-techies. You can do everything right in our dashboard.
      </p>
    </>
    ),
  },
  {
    title: 'SQL Editor',
    content: (
    <>
      <h1 className='text-neutral-100 text-xl mb-4'>
        In-built SQL editor for when you need greater control
      </h1>

      <p className='text-neutral-300 text-sm'>
        Write, save, and execute SQL queries directly on our dashboard, 
        with templates to save you time. Run common queries and even 
        build applications using our growing list of templates.
      </p>
    </>
    ),
  },
  {
    title: 'Auth Rules',
    content: (
    <>
      <h1 className='text-neutral-100 text-xl mb-4'>
        User management as straight-forward as it can be
      </h1>

      <p className='text-neutral-300 text-sm'>
        Easily manage your users with Supabase Auth, with email 
        logins, magic links, and third-party logins. Create 
        complex access policies with SQL rules to fit your unique business needs.
      </p>
    </>
    ),
  },
  {
    title: 'Example',
    content: (
    <>
      <h1 className='text-neutral-100 text-xl mb-4'>
        This is some example heading of this tab
      </h1>

      <p className='text-neutral-300 text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Maiores nulla id ipsam fuga voluptate excepturi, labore 
        nobis numquam modi ex quasi. Cumque ullam accusantium 
        aliquid voluptas pariatur tenetur similique consequuntur?
      </p>
    </>
    ),
  },
];

export default tabData;
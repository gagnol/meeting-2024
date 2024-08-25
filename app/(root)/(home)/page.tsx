import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('es-ES', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-cover"
       style={{ backgroundImage: 'url("/images/hero-background.png")' }}
      >
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="max-w-[273px] rounded  text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-500 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
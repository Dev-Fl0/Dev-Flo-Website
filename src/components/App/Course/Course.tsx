import { CustomFlowbiteTheme, Flowbite, Timeline } from 'flowbite-react';
import { HiCalendar } from 'react-icons/hi';

export default function Course() {
  const customTheme: CustomFlowbiteTheme = {
    timeline: {
      root: {
        direction: {
          horizontal: 'items-base sm:flex ',
          vertical: 'relative border-l border-primary-50',
        },
      },
      item: {
        root: {
          horizontal: 'relative mb-6 sm:mb-0 ',
          vertical: 'mb-10 ml-6 ',
        },
        content: {
          root: {
            base: 'mt-3 sm:pr-8 ',
          },
          body: {
            base: 'mb-4 text-base font-normal text-primary-50 ',
          },
          time: {
            base: 'mb-1 text-sm font-normal leading-none text-primary-50 ',
          },
          title: {
            base: 'text-lg font-semibold text-primary-50 ',
          },
        },
        point: {
          horizontal: 'flex items-center ',
          line: 'hidden h-0.5 w-full bg-primary-50 sm:flex ',
          marker: {
            base: {
              horizontal:
                'absolute -left-1.5 h-5 w-5 rounded-full border border-white ',
              vertical:
                'absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white text-primary-50 bg-primary-50 ',
            },
            icon: {
              base: 'h-3 w-3 text-cyan-600 ',
              wrapper:
                'absolute -left-3 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-primary-400 ',
            },
          },
          vertical: '',
        },
      },
    },
  };

  return (
    <div className="w-full course">
      <h2
        id="course"
        className="text-primary-50 mb-8 sm:mb-20 text-4xl text-center font-extrabold"
      >
        Course
      </h2>
      <div className="course">
        <Flowbite theme={{ theme: customTheme }}>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time>September 2023</Timeline.Time>
                <Timeline.Title>LEAD DEV BACK-END</Timeline.Title>
                <Timeline.Body>
                  Immo&rsquo;Pros - Property management application real estate
                  prospecting.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time>May 2023</Timeline.Time>
                <Timeline.Title>web & mobile web developer</Timeline.Title>
                <Timeline.Body>
                  O&rsquo;Clock School Intensive training 798 hours. Title RNCP
                  lvl 5 (bac + 2).
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </Flowbite>
      </div>
    </div>
  );
}

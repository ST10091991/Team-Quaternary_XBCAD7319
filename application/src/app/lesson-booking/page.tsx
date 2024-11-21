'use client'

import React, { useState } from 'react'
import { Separator } from '@/components/shadcn-ui/separator'
import { Button } from '@/components/shadcn-ui/button'
import LessonBookingCard from '@/components/ui/lesson-booking-card'
import { Lesson } from '@/models/Lesson'
import LessonInformationCard from '@/components/ui/lesson-information-card'
import LessonSelectionCard from '@/components/ui/lesson-selection-card'
import useUsers from '@/hooks/useUsers'

const exampleLesson: Lesson = {
  id: 1,
  title: 'Tennis Lesson with Coach Nick',
  description:
    'Improve your tennis skills with personalized coaching. This lesson focuses on perfecting your serve and backhand techniques. Suitable for intermediate players.',
  date: new Date(),
  startTime: new Date(),
  endTime: new Date(),
  // Fix contact number
  contactDetailsId: 9,
  contactDetails: {
    id: 9,
    name: 'Person',
    phone: '1234567890',
    email: 'coach.nick@example.com',
  },

  addressId: 3,
  address: {
    id: 3,
    address: '123 Tennis Court Lane, Sportsville, SP 12345',
  },
  paymentAmount: 75.0,
  skillLevel: 'Intermediate',

  paymentDetailsId: 1,
  paymentDetails: {
    id: 1,
    // paymentDetails: string
    name: 'Damian Dare',
    bank: 'Capitec',
    branch: 'IDK BRO',
    branchCode: 1232,
    accountNumber: 123212,
  },
}

export default function page() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | undefined>()
  const { useCoach } = useUsers()

  return (
    <div
      /* className="flex h-full grow gap-5 bg-blue-500 "*/ className="flex flex-grow basis-0 justify-center gap-5"
    >
      {/* <div className="flex flex-grow basis-0 flex-col gap-2">
        <div className="flex-grow basis-0 overflow-auto bg-blue-500">
          Item 1 asdfasdfasdf asdf sadfa sdfasdf Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Delectus dignissimos incidunt quibusdam
          blanditiis eos. Vitae dignissimos deserunt dicta illo voluptates ut
          neque, maxime exercitationem facere mollitia autem molestiae iure quam
          dolorum ipsam quasi suscipit optio deleniti, obcaecati eveniet sed.
          Tenetur laborum obcaecati distinctio ducimus ad dolor sit laboriosam
          ut totam et veniam quibusdam molestiae voluptate corrupti quos nihil
          nam repellendus temporibus pariatur, in dignissimos necessitatibus
          quam nisi? Debitis velit, veritatis voluptate dignissimos aliquid
          excepturi officia totam distinctio placeat! Architecto rem dicta
          repellendus distinctio accusamus consectetur sint voluptas saepe
          doloribus. Veritatis laboriosam, illum deleniti soluta molestiae
          voluptas doloremque non nam quas quidem corrupti fuga ad ipsa
          incidunt? Labore qui ad omnis aspernatur temporibus dolor recusandae
          molestias ducimus voluptatibus quam dolorum reprehenderit, autem est
          unde, beatae commodi fugit earum sed! At distinctio deleniti officiis
          quos, incidunt ab aliquam harum, voluptates ratione illum non error
          dignissimos minus magni expedita reprehenderit tenetur ducimus culpa
          et itaque veniam consectetur sunt vel iste. Quasi sunt consequuntur
          earum ut nam error rem eum voluptas labore dolor eligendi minus cum
          similique officia sint sapiente illo, ipsa dignissimos voluptate
          voluptates numquam. Rem beatae dolor quae explicabo unde eum tempore
          rerum sint animi ab numquam, necessitatibus autem. Veniam, obcaecati
          cumque? Item 1 asdfasdfasdf asdf sadfa sdfasdf Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Delectus dignissimos incidunt
          quibusdam blanditiis eos. Vitae dignissimos deserunt dicta illo
          voluptates ut neque, maxime exercitationem facere mollitia autem
          molestiae iure quam dolorum ipsam quasi suscipit optio deleniti,
          obcaecati eveniet sed. Tenetur laborum obcaecati distinctio ducimus ad
          dolor sit laboriosam ut totam et veniam quibusdam molestiae voluptate
          corrupti quos nihil nam repellendus temporibus pariatur, in
          dignissimos necessitatibus quam nisi? Debitis velit, veritatis
          voluptate dignissimos aliquid excepturi officia totam distinctio
          placeat! Architecto rem dicta repellendus distinctio accusamus
          consectetur sint voluptas saepe doloribus. Veritatis laboriosam, illum
          deleniti soluta molestiae voluptas doloremque non nam quas quidem
          corrupti fuga ad ipsa incidunt? Labore qui ad omnis aspernatur
          temporibus dolor recusandae molestias ducimus voluptatibus quam
          dolorum reprehenderit, autem est unde, beatae commodi fugit earum sed!
          At distinctio deleniti officiis quos, incidunt ab aliquam harum,
          voluptates ratione illum non error dignissimos minus magni expedita
          reprehenderit tenetur ducimus culpa et itaque veniam consectetur sunt
          vel iste. Quasi sunt consequuntur earum ut nam error rem eum voluptas
          labore dolor eligendi minus cum similique officia sint sapiente illo,
          ipsa dignissimos voluptate voluptates numquam. Rem beatae dolor quae
          explicabo unde eum tempore rerum sint animi ab numquam, necessitatibus
          autem. Veniam, obcaecati cumque? Item 1 asdfasdfasdf asdf sadfa
          sdfasdf Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus dignissimos incidunt quibusdam blanditiis eos. Vitae
          dignissimos deserunt dicta illo voluptates ut neque, maxime
          exercitationem facere mollitia autem molestiae iure quam dolorum ipsam
          quasi suscipit optio deleniti, obcaecati eveniet sed. Tenetur laborum
          obcaecati distinctio ducimus ad dolor sit laboriosam ut totam et
          veniam quibusdam molestiae voluptate corrupti quos nihil nam
          repellendus temporibus pariatur, in dignissimos necessitatibus quam
          nisi? Debitis velit, veritatis voluptate dignissimos aliquid excepturi
          officia totam distinctio placeat! Architecto rem dicta repellendus
          distinctio accusamus consectetur sint voluptas saepe doloribus.
          Veritatis laboriosam, illum deleniti soluta molestiae voluptas
          doloremque non nam quas quidem corrupti fuga ad ipsa incidunt? Labore
          qui ad omnis aspernatur temporibus dolor recusandae molestias ducimus
          voluptatibus quam dolorum reprehenderit, autem est unde, beatae
          commodi fugit earum sed! At distinctio deleniti officiis quos,
          incidunt ab aliquam harum, voluptates ratione illum non error
          dignissimos minus magni expedita reprehenderit tenetur ducimus culpa
          et itaque veniam consectetur sunt vel iste. Quasi sunt consequuntur
          earum ut nam error rem eum voluptas labore dolor eligendi minus cum
          similique officia sint sapiente illo, ipsa dignissimos voluptate
          voluptates numquam. Rem beatae dolor quae explicabo unde eum tempore
          rerum sint animi ab numquam, necessitatibus autem. Veniam, obcaecati
          cumque?
        </div>
      </div> */}

      {/* Calendar and Lessons Column */}

      <div className="flex max-w-max flex-grow basis-0 flex-col items-center justify-center gap-2">
        <div className="flex-grow basis-0 overflow-auto">
          <LessonSelectionCard
            selectedLesson={selectedLesson}
            setSelectedLesson={setSelectedLesson}
          />
        </div>
      </div>

      <Separator className="my-auto h-3/4 w-0.5" />

      <div className="flex max-w-max flex-grow basis-0 flex-col gap-2">
        <div className="flex-grow basis-0 overflow-auto">
          <LessonInformationCard lesson={selectedLesson} />
        </div>
      </div>

      <div className="flex max-w-max flex-grow basis-0 flex-col gap-2">
        <div className="flex-grow basis-0 overflow-auto">
          <LessonBookingCard lesson={selectedLesson} />
        </div>
      </div>

      <Separator className="my-auto h-3/4 w-0.5" />

      <div className="flex max-w-max flex-grow basis-0 flex-col gap-2">
        <div className="flex-grow basis-0 overflow-auto">
          {/* Upcoming Lessons Section */}
          <div className="flex h-full w-72 max-w-xs flex-col gap-2 rounded-md border p-4">
            <p className="mx-auto">Your Upcoming Lessons</p>

            <Separator className="mx-auto h-0.5 w-3/4" />

            <div className="flex max-h-fit grow flex-col gap-20 overflow-auto bg-rose-500">
              {/* Come back to */}
              {/* <div className="bg-blue-500">Item 1</div>
              <div className="bg-blue-500">Item 1</div>
              <div className="bg-blue-500">Item 1</div>
              <div className="bg-blue-500">Item 1</div>
              <div className="bg-blue-500">Item 1</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
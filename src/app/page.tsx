"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";

import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Начало",          id: "home"},
        {
          name: "Отзиви",          id: "testimonials"},
        {
          name: "Контакти",          id: "contact"},
      ]}
      brandName="ББ Маркет"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      title="Вашият квартален магазин за прясна храна и удоволствия"
      description="ББ Маркет предлага внимателно подбрани хранителни стоки, автентични италиански пици, принцеси, сандвичи и професионални кафета. Всичко необходимо на едно място."
      testimonials={[
        {
          name: "Мария Петрова",          handle: "@MariaP",          testimonial: "Винаги свежи продукти и най-вкусните пици в града! Обслужването е на ниво.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-bed-showing-ok-gesture_23-2147767529.jpg?_wi=1",          imageAlt: "Customer Maria Petrova"},
        {
          name: "Иван Георгиев",          handle: "@IvanG",          testimonial: "Любимото ми място за сутрешно кафе и бърз сандвич. Кафето е страхотно!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-teenage-girl-sitting-cafe_1262-3048.jpg?_wi=1",          imageAlt: "Customer Ivan Georgiev"},
        {
          name: "Елена Димитрова",          handle: "@ElenaD",          testimonial: "ББ Маркет е моят магазин за всичко – от основни хранителни продукти до вкусна готова храна.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-enjoying-cup-coffee_23-2148953567.jpg?_wi=1",          imageAlt: "Customer Елена Димитрова"},
        {
          name: "Георги Колев",          handle: "@GeorgiK",          testimonial: "Много удобно местоположение и винаги намирам това, което търся. Пиците са феноменални.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/husband-wife-having-nice-date-coffee-shop_23-2149016148.jpg?_wi=1",          imageAlt: "Customer Георги Колев"},
      ]}
      testimonialRotationInterval={5000}
      buttons={[
        {
          text: "Поръчайте по Телефон",          href: "tel:0895038323"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-woman-keeping-social-distance_23-2148626201.jpg"
      imageAlt="BB Market store interior with diverse products"
      mediaAnimation="slide-up"
    />
  </div>



  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="opacity"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Анна Стоянова",          handle: "@AnnaS",          testimonial: "ББ Маркет е моят избор за пазаруване. Винаги намирам качествени продукти и всичко е много добре подредено. Пиците са невероятни!",          imageSrc: "http://img.b2bpic.net/free-photo/woman-bed-showing-ok-gesture_23-2147767529.jpg?_wi=2",          imageAlt: "Anna Stoyanova"},
        {
          id: "2",          name: "Петър Иванов",          handle: "@PetarI",          testimonial: "Работя наблизо и често си взимам кафе и сандвич от ББ Маркет. Обслужването е бързо, а храната винаги прясна и вкусна. Горещо препоръчвам!",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-teenage-girl-sitting-cafe_1262-3048.jpg?_wi=2",          imageAlt: "Petar Ivanov"},
        {
          id: "3",          name: "Даниела Костова",          handle: "@DanielaK",          testimonial: "Много съм доволна от разнообразието на хранителни стоки. Няма нужда да обикалям много магазини, всичко намирам тук. Цените също са добри.",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-enjoying-cup-coffee_23-2148953567.jpg?_wi=2",          imageAlt: "Daniela Kostova"},
        {
          id: "4",          name: "Николай Йорданов",          handle: "@NikolaiY",          testimonial: "Професионалните кафета са истинско удоволствие. Започвам деня си винаги с кафе от ББ Маркет. Много добро съотношение цена-качество.",          imageSrc: "http://img.b2bpic.net/free-photo/husband-wife-having-nice-date-coffee-shop_23-2149016148.jpg?_wi=2",          imageAlt: "Nikolai Yordanov"},
      ]}
      title="Какво казват нашите клиенти"
      description="Доверието на клиентите е най-важно за нас, затова се стремим да предлагаме само най-доброто."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      text="Посетете ни или ни се обадете!\n\nАдрес: гр. Пазарджик, ул. Георги Бенковски 27\nТелефон: 089 503 8323\n\nРаботно време:\nПонеделник - Неделя: 07:00 - 21:00" 
      buttons={[
        {
          text: "Обадете се сега!",          href: "tel:0895038323"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Начало",              href: "#home"},
            {
              label: "Отзиви",              href: "#testimonials"},
            {
              label: "Контакти",              href: "#contact"},
          ],
        },
        {
          items: [
            {
              label: "Условия за ползване",              href: "#"},
            {
              label: "Политика за поверителност",              href: "#"},
          ],
        },
      ]}
      logoText="ББ Маркет"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

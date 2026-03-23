"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Box, Calendar, Droplet, ShoppingBag, Users } from "lucide-react";

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
          name: "Начало",
          id: "home",
        },
        {
          name: "Продукти",
          id: "products",
        },
        {
          name: "За нас",
          id: "about",
        },
        {
          name: "Отзиви",
          id: "testimonials",
        },
        {
          name: "Контакти",
          id: "contact",
        },
      ]}
      brandName="ББ Маркет"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      title="Вашият квартален магазин за прясна храна и удоволствия"
      description="ББ Маркет предлага внимателно подбрани хранителни стоки, автентични италиански пици, принцеси, сандвичи и професионални кафета. Всичко необходимо на едно място."
      testimonials={[
        {
          name: "Мария Петрова",
          handle: "@MariaP",
          testimonial: "Винаги свежи продукти и най-вкусните пици в града! Обслужването е на ниво.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-bed-showing-ok-gesture_23-2147767529.jpg",
          imageAlt: "Customer Maria Petrova",
        },
        {
          name: "Иван Георгиев",
          handle: "@IvanG",
          testimonial: "Любимото ми място за сутрешно кафе и бърз сандвич. Кафето е страхотно!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-teenage-girl-sitting-cafe_1262-3048.jpg",
          imageAlt: "Customer Ivan Georgiev",
        },
        {
          name: "Елена Димитрова",
          handle: "@ElenaD",
          testimonial: "ББ Маркет е моят магазин за всичко – от основни хранителни продукти до вкусна готова храна.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-enjoying-cup-coffee_23-2148953567.jpg",
          imageAlt: "Customer Elena Dimitrova",
        },
        {
          name: "Георги Колев",
          handle: "@GeorgiK",
          testimonial: "Много удобно местоположение и винаги намирам това, което търся. Пиците са феноменални.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/husband-wife-having-nice-date-coffee-shop_23-2149016148.jpg",
          imageAlt: "Customer Georgi Kolev",
        },
      ]}
      testimonialRotationInterval={5000}
      buttons={[
        {
          text: "Разгледайте Продукти",
          href: "#products",
        },
        {
          text: "Поръчайте по Телефон",
          href: "tel:0895038323",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-woman-keeping-social-distance_23-2148626201.jpg"
      imageAlt="BB Market store interior with diverse products"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Ние сме ББ Маркет"
      metrics={[
        {
          icon: Calendar,
          label: "Години опит",
          value: "5+",
        },
        {
          icon: Award,
          label: "Висококачествени продукти",
          value: "200+",
        },
        {
          icon: Users,
          label: "Доволни клиенти",
          value: "1000+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Award,
          title: "Италиански пици",
          description: "Автентични рецепти, приготвени с внимание и подбрани продукти за неповторим вкус.",
        },
        {
          icon: Box,
          title: "Принцеси и Сандвичи",
          description: "Разнообразие от свежи и току-що приготвени принцеси и сандвичи за бърз и вкусен обяд или вечеря.",
        },
        {
          icon: Droplet,
          title: "Професионални кафета",
          description: "Насладете се на ароматно кафе от висококачествени зърна, приготвено от нашите баристи.",
        },
        {
          icon: ShoppingBag,
          title: "Разнообразни хранителни стоки",
          description: "Открийте богат асортимент от хранителни продукти, без плодове и зеленчуци, за вашето домакинство.",
        },
      ]}
      title="Нашите предложения"
      description="От свежи хранителни стоки до току-що приготвени ястия – открийте разнообразие от вкусове, които ще задоволят всеки вкус."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "product-1",
          name: "Пица Капричоза",
          price: "14.99 лв.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-sausage-pizza-with-napkin-fork-board-cookware_176474-3211.jpg",
          imageAlt: "Pizza Capricciosa",
        },
        {
          id: "product-2",
          name: "Принцеса с кайма",
          price: "4.50 лв.",
          imageSrc: "http://img.b2bpic.net/free-photo/panini-sandwich-with-ham-cheese-tomato-arugula-wooden-table_123827-27059.jpg",
          imageAlt: "Princess with minced meat",
        },
        {
          id: "product-3",
          name: "Еспресо Лате",
          price: "3.50 лв.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hand-holding-coffee-cup_23-2148865577.jpg",
          imageAlt: "Espresso Latte",
        },
        {
          id: "product-4",
          name: "Био зърнени храни",
          price: "7.99 лв.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-looking-different-goodies-local-producer_23-2149110869.jpg",
          imageAlt: "Organic Cereals",
        },
      ]}
      title="Нашите продукти"
      description="Вижте част от нашия асортимент – вкусно и качествено за всеки ден, подбрано с грижа за вас."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="opacity"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Анна Стоянова",
          handle: "@AnnaS",
          testimonial: "ББ Маркет е моят избор за пазаруване. Винаги намирам качествени продукти и всичко е много добре подредено. Пиците са невероятни!",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-bed-showing-ok-gesture_23-2147767529.jpg",
          imageAlt: "Anna Stoyanova",
        },
        {
          id: "2",
          name: "Петър Иванов",
          handle: "@PetarI",
          testimonial: "Работя наблизо и често си взимам кафе и сандвич от ББ Маркет. Обслужването е бързо, а храната винаги прясна и вкусна. Горещо препоръчвам!",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-teenage-girl-sitting-cafe_1262-3048.jpg",
          imageAlt: "Petar Ivanov",
        },
        {
          id: "3",
          name: "Даниела Костова",
          handle: "@DanielaK",
          testimonial: "Много съм доволна от разнообразието на хранителни стоки. Няма нужда да обикалям много магазини, всичко намирам тук. Цените също са добри.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-enjoying-cup-coffee_23-2148953567.jpg",
          imageAlt: "Daniela Kostova",
        },
        {
          id: "4",
          name: "Николай Йорданов",
          handle: "@NikolaiY",
          testimonial: "Професионалните кафета са истинско удоволствие. Започвам деня си винаги с кафе от ББ Маркет. Много добро съотношение цена-качество.",
          imageSrc: "http://img.b2bpic.net/free-photo/husband-wife-having-nice-date-coffee-shop_23-2149016148.jpg",
          imageAlt: "Nikolai Yordanov",
        },
      ]}
      title="Какво казват нашите клиенти"
      description="Доверието на клиентите е най-важно за нас, затова се стремим да предлагаме само най-доброто."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Посетете ни или ни се обадете!\n\nАдрес: гр. Пазарджик, ул. Георги Бенковски 27\nТелефон: 089 503 8323\n\nРаботно време:\nПонеделник - Събота: 08:00 - 20:00\nНеделя: 09:00 - 18:00"
      buttons={[
        {
          text: "Обадете се сега!",
          href: "tel:0895038323",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Начало",
              href: "#home",
            },
            {
              label: "Продукти",
              href: "#products",
            },
            {
              label: "За нас",
              href: "#about",
            },
            {
              label: "Отзиви",
              href: "#testimonials",
            },
            {
              label: "Контакти",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Пици",
              href: "#products",
            },
            {
              label: "Принцеси и Сандвичи",
              href: "#products",
            },
            {
              label: "Кафета",
              href: "#products",
            },
            {
              label: "Хранителни стоки",
              href: "#products",
            },
          ],
        },
        {
          items: [
            {
              label: "Условия за ползване",
              href: "#",
            },
            {
              label: "Политика за поверителност",
              href: "#",
            },
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

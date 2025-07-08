import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/img/b7c015aa-1738-44b3-9bf8-0c3dea81e3bd.jpg"
                alt="Сказка в кадре"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Сказка в кадре
                </h1>
                <p className="text-sm text-gray-600">Детская фотография</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                О нас
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              Записать группу
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Сохраняем сказку
            <br />
            <span className="text-primary">детства в кадре</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Профессиональная фотосъемка для детей любого возраста в детских
            садах. Групповые постановочные и lifestyle съемки с фокусом на
            эмоциях.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
            >
              <Icon name="Calendar" className="mr-2" />
              Записать группу
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Icon name="Download" className="mr-2" />
              Получить презентацию
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/60">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                О проекте
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Мы специализируемся на детской фотографии с 2018 года. Наша
                миссия — сохранить самые яркие моменты детства через объектив
                камеры.
              </p>
              <p className="text-gray-600 mb-6">
                Работаем с детьми всех возрастов, используя индивидуальный
                психологический подход к каждому ребенку. Создаем комфортную
                атмосферу, где дети чувствуют себя естественно и раскрепощенно.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/10 text-primary">
                  Психологический подход
                </Badge>
                <Badge className="bg-secondary/10 text-secondary-foreground">
                  Индивидуальность
                </Badge>
                <Badge className="bg-primary/10 text-primary">
                  Профессионализм
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/9ee4b4d4-bde5-40f2-9641-bbfdc2b688a2.jpg"
                alt="Фотограф с детьми"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" className="text-red-500" />
                  <span className="text-sm font-medium">
                    2000+ счастливых семей
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Наши преимущества
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Shield" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-xl">
                  Безопасность превыше всего
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Все согласия родителей оформляются официально. Строго
                  соблюдаем правила работы с детьми и конфиденциальность.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon
                    name="User"
                    className="text-secondary-foreground"
                    size={32}
                  />
                </div>
                <CardTitle className="text-xl">Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  К каждому ребенку находим особый подход. Учитываем характер,
                  настроение и особенности каждого малыша.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Zap" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-xl">Быстрая обработка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Готовые фотографии вы получите в течение 7-10 дней.
                  Профессиональная обработка и цветокоррекция включены.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5"
      >
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Услуги и пакеты
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-center text-primary">Мини</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">от 3000₽</span>
                  <p className="text-sm text-gray-600">за группу</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    15 обработанных фото
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    Групповые снимки
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    Базовая обработка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    Срок: 7 дней
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-center text-secondary-foreground">
                  Классика
                </CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">от 5000₽</span>
                  <p className="text-sm text-gray-600">за группу</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    30 обработанных фото
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    Групповые + портреты
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    Расширенная обработка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    Срок: 7 дней
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors bg-primary/5">
              <CardHeader>
                <CardTitle className="text-center text-primary">
                  Сказка+
                </CardTitle>
                <Badge className="mx-auto bg-primary text-white">
                  Популярный
                </Badge>
                <div className="text-center">
                  <span className="text-3xl font-bold">от 8000₽</span>
                  <p className="text-sm text-gray-600">за группу</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    50 обработанных фото
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    Lifestyle съемка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    Художественная обработка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    Срок: 5 дней
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 hover:border-gray-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-center text-gray-700">
                  Индивидуально
                </CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">от 2000₽</span>
                  <p className="text-sm text-gray-600">за ребенка</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    Студийная съемка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    Персональный подход
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    Премиум обработка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-green-600"
                      size={16}
                    />
                    Срок: 3 дня
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-white/60">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Портфолио
          </h3>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Яркие кадры, живые эмоции, настоящие моменты детства
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl"
              >
                <img
                  src="/img/9c148ca2-168a-4a82-9fc6-cd17f23e4331.jpg"
                  alt={`Фото ${index}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-medium">Детский сад №{index}</p>
                    <p className="text-sm opacity-90">Групповая съемка</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Отзывы
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Анна Петрова</CardTitle>
                    <p className="text-sm text-gray-600">Мама Маши, 4 года</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  "Потрясающие фотографии! Фотограф нашла подход к каждому
                  ребенку. Машенька была очень стеснительная, но на фото
                  выглядит так естественно и радостно."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-secondary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена Сидорова</CardTitle>
                    <p className="text-sm text-gray-600">Заведующая ДОУ №12</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  "Сотрудничаем уже второй год. Профессионализм на высшем
                  уровне! Все родители довольны качеством фотографий и
                  организацией процесса."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Мария Иванова</CardTitle>
                    <p className="text-sm text-gray-600">Мама Артема, 6 лет</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  "Фотосессия прошла в игровой форме, дети даже не заметили, что
                  их фотографируют. Результат превзошел все ожидания!"
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8 py-3">
              <Icon name="MessageCircle" className="mr-2" />
              Оставить отзыв
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5"
      >
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Оставить заявку
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Записать группу
                </CardTitle>
                <CardDescription className="text-center">
                  Заполните форму и мы свяжемся с вами в течение дня
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="kindergarten">Детский сад</Label>
                  <Input
                    id="kindergarten"
                    placeholder="Название детского сада"
                  />
                </div>
                <div>
                  <Label htmlFor="date">Желаемая дата</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label htmlFor="wishes">Пожелания</Label>
                  <Textarea
                    id="wishes"
                    placeholder="Особые пожелания или вопросы"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Скачать презентацию</CardTitle>
                  <CardDescription>
                    Подробная информация о наших услугах для заведующих
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Icon name="Download" className="mr-2" />
                    Скачать презентацию для заведующей
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="text-primary" />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="text-primary" />
                    <span>info@skazka-v-kadre.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Instagram" className="text-primary" />
                    <span>@skazka_v_kadre</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="text-primary" />
                    <span>г. Москва, ул. Детская, 123</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Сказка в кадре</h4>
              <p className="text-gray-300">
                Профессиональная детская фотография с 2018 года. Сохраняем самые
                яркие моменты детства.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-300">
                <li>Групповая фотосъемка</li>
                <li>Индивидуальные портреты</li>
                <li>Lifestyle съемка</li>
                <li>Студийная фотография</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-300">
                <p>+7 (999) 123-45-67</p>
                <p>info@skazka-v-kadre.ru</p>
                <p>г. Москва, ул. Детская, 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Сказка в кадре. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

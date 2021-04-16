---
layout: post
date: 2019-10-17 19:00:00
image: "https://secure.meetupstatic.com/photos/event/2/0/a/8/highres_485588360.jpeg"
title: Бэкенд-митап в гостях у Туту.ру
excerpt: "Доклады про PHP, паттерны, микросервисы, Casbin и домашних проект на Go и Swift."
---

Компания [tutu.ru](https://www.tutu.ru/) пригласила наш клуб провести совместную встречу. Мы, москвичи, отправляясь в Подмосковье, неизменно сверяемся с расписанием электричек на сайте **tutu.ru**. Вместо с нами ежедневно также поступают шестьсот тысяч россиян.

Отправляясь в дальнее путешествение, мы ищем на сайте компании самые дешёвые авиа- или железнодорожные билеты.

За простым интерфейсом скрываются серьёзные и интересные технологии, поэтому московские программисты с удовольствием приняли приглашение.

Как устроен изнутри сервис, который должен быть масштабируемым и надёжным? Сотрудники компании поделились с нами своими секретами, накормили нас пиццей и в перерыве показали нам свой офис. Программисты клуба со своей стороны прочитали доклады по интересным для **tutu.ru** темам PHP и Go.

За организацию этого интересного мероприятия мы благодарим Елену Корнилову, которая предложила идею совместного митапа, а потом неустанно его готовила.

[Анонс мероприятия в хабраблоге tutu.ru](https://habr.com/ru/company/tuturu/blog/471094/).

### PHP и паттерны

В самом начале встречи Павел Иванов рассказал о том, как паттерны проектирования применяются в PHP-проектах, опираясь на реальные примеры из своей практики. Он участвует в разработке проекта на основе движка Laravel, где многие паттерны используются прямо из коробки.

[Презентация](/downloads/laravel-php-patterns.pdf) доклада в формате PDF.

<div class="video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/fLYPWFfpvfA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Система контроля доступа пользователей в микросервисной архитектуре

Ольга Николаева  — сотрудница tutu.ru — сделала доклад о проекте casbin. Casbin помогает в ограничении прав доступа в микросервисной среде. Он написан на Go, хорошо масштабируется и быстро развивается сообществом.

Ольга рассказала о трудностях, которые возникают у программистов при авторизации в микросервисах и о причинах, побудивших команду обратить внимание на casbin. Особой изюминкой доклада можно считать рассказ о проблемах, возникавших при внедрении casbin, и о том, как разработчики с ними справились.

[Презентация](/downloads/casbin.pdf) доклада в формате PDF.

<div class="video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Z5dUxH4PqYM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Airwatch

Андрей Медведев, будучи backend-разработчиком, интересуется и тем, что происходит в смежных сферах. Страдая от пыльцы и пыли, он решил собирать информацию о том, где в Москве повышена концентрация аллергенов.

Это, вначале серверное приложение обрело интерфейс в виде Telegram-бота, который уведомляет вас о повышенной концентрации всякой бяки. Этого Андрею показалось мало, и он переписал программу на Swift, чтобы её можно было запускать на iPhone.

Рассказ Андрея вдохновляет на изучений незнакомых, но интересных технологий. На слайдах видно, как приложение обретает современный внешний вид и новые функции.

Серверная часть написана Андреем на Go. Проект не только интересен с программистской точки зрения, но и приносит реальную пользу.

[Сайт проекта](https://airwatch.andmed.org/airwatch/index)

[Слайды](https://airwatch.andmed.org/airwatch/pub/presentation/)

[Программа Airwatch в Apple Store](https://apps.apple.com/app/id1458144886)

<div class="video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/FZGeuGaUOQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Фото

![Tutu.ru](https://secure.meetupstatic.com/photos/event/4/a/4/3/highres_485839011.jpeg){: .large-figure}
![Tutu.ru](https://secure.meetupstatic.com/photos/event/4/a/4/1/highres_485839009.jpeg){: .large-figure}
![Tutu.ru](https://secure.meetupstatic.com/photos/event/4/a/3/c/highres_485839004.jpeg){: .large-figure}
![Tutu.ru](https://secure.meetupstatic.com/photos/event/4/a/3/9/highres_485839001.jpeg){: .large-figure}

---
layout: post
date: 2018-09-06 19:00:00
image: "https://github.com/progmsk/progmsk.github.io/assets/10639110/c5b56815-a221-43a9-ac9c-e1eadc23b3da"
title: Организация процесса разработки, встреча №3
excerpt: Организация удалённой работы, требования, теория, практика и бардак
---

Про то, как переводить теорию в практику и как работать в бардаке поговорить не успели.
Глубоко обсудили тему *удалённой работы* и чуть менее глубоко тему требований.

## Организация удалённой работы

### Затравка

Определили интересные нам аспекты удалённой работы.

1. Как обеспечить профессиональный рост при удалённой работе?
1. Как заставлять себя работать?
1. Как организовать удалённую работу в компании?
1. Как стартовать?

Далее по списку.

### Как обеспечить профессиональный рост при удалённой работе?

1. Удалённая работа *заставляет* осваивать инструментарий, начиная от трекеров и заканчивая системами контроля версий.
1. Профессиональный рост, который в коллективе обеспечивают умные коллеги, при удалённой работе надо организовать самому.
   Надо больше читать, надо посещать конференции, надо самому быть в теме.
1. Совещания можно проводить с помощью звуковых чатов или видеочатов. Инструменты: [Zoom](https://zoom.us/),
   [Discord](https://discordapp.com/), [GoToMeeting](https://www.gotomeeting.com/).

### Как заставлять себя работать?

1. Идите в коворкинг, платите деньги. Дом&nbsp;&mdash; не рабочее место.
1. Работайте в библиотеке, это даже дешевле, чем в коворкинге.
1. Ведите учёт времени. Подробности на [митапах Вячеслава Мацнева](https://www.meetup.com/ru-RU/time-management-moscow/). Да, это реклама.

### Как организовать удалённую работу в компании?

1. Пишите регламент удалённой работы. Регламент пишется кровью удалённого работодателя. Примеры смотрите в [IT-AGENCY](http://www.it-agency.ru/academy/).
1. Документируйте. Любая переписка, любой звонок по скайпу&nbsp;&mdash; от недостатка документации. У нас нет такой роскоши, как возможность общения.
1. Создавайте культуру. Создавайте традиции. Я читаю твой код и пишу свой по образу и подобию.
1. Ищите толкового менеджера проектов.
1. Используйте самый продвинутый инструментарий. Создавайте собственный инструментарий. Автоматическая проверка кода и документации лучше, чем ручная.
   Благодаря ей вы уже не бутылочное горлышко.
1. Относитель к удалённым сотрудникам по человечески. Они тоже не любят чувствовать себя *винтиками в машине*.
1. Используйте видеоконференции для *пятиминуток*, *покера планирования* и *ретроспектив*.
1. Убирайте преграды. Удалённая работа и так требует писанины, поэтому избегайте ненужной бюрократии.

### Как стартовать?

1. Опирайтесь на чужой опыт. Мы советуем [wemake.services](https://wemake.services/meta/) и [zerocracy](https://www.zerocracy.com/toc.html).
1. В начале особое внимание уделяйте *ретроспективам*. Определяйте преграды и думайте, что с ними делать.

## Требования

### Кейс

Кейс: критически важные требования были очевидны для бизнеса и не очевидны для разработчиков. Выяснилось это поздно, когда система была запущена и не справилась с нагрузкой.
Вопрос, как избежать такой ситуации.

1. Работать по одной из гибких методик. Есть шанс, что требование о нагрузке будет озвучено, как только система заработает, но задолго до того, как она будет запущена в промышленную эксплуатацию.
1. Привлечь эксперта.
1. Составить опросник, опираясь на опыт неудач. Задайте следующему клиенту вопросы о пиках нагрузки, а чтобы не забыть, запишите.

### Разночтения

Как быть, если программисты не понимают бизнес?

1. Никак. Делать, показывать, потом исправлять. Зафиксировать, что недопонимания возможны.
1. Переспрашивать своими словами.
1. В соответствии с гибкими методиками. Ввести в состав команды *представителя заказчика*.
1. По правилам DDD. Делать углубляющий рефакторинг. Сделать понимание предметной области деятельностью, которой надо заниматься.

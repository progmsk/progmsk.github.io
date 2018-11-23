---
layout: post
date: 2018-08-23 19:00:00
image: "https://secure.meetupstatic.com/photos/event/6/5/f/3/highres_473246099.jpeg"
title: Организация процесса разработки, встреча №2
excerpt: Оценка эффективности программистов, Уровень кандидатов на собеседованиях
---

## Оценка эффективности программиста

### Затравка

Определили интересные акценты темы:

1. Оценка эффективности программистов может быть технической и организационной. Правомерно ли разделять?
   Если планомерно, то в чём отличие?
1. Каковы критерии оценки?
1. Каковы методы оценки?
1. Оценка эффективности с точки зрения начинающего программиста&nbsp;&mdash; куда расти?
1. Оценка в условиях, когда ты единственный технарь.
1. Оценка в условиях, когда попал в болото.

В начале встречи небольшой доклад пытался сделать Сергей Кудрявцев, но доклад быстро перерос в обсуждение.
Получилось увлекательно, потому что тема острая. Признаю свою вину: вместо модерации я стал участвовать
в дискуссии, поэтому интересные народу акценты мы не затронули, а затронули, что получилось.

### Доклад

Сергей выдвинул следующие тезисы:

1. Оценивать производительность отдельных программистов вредно, потому что разные роли, разная мотивация. Оценивать нужно команду.
1. Сравнивать команду с другими командами трудно, потому что разные задачи. Реально сравнивать команду с собой.
1. Применяли разные способы оценки, и вот что получилось:
   1. Можно оценивать в заработанных деньгах. Не всегда получается, потому что вклад программистов трудно оценить. Комментарий
      с места: в некоторых компаниях программисты это вообще центр расходов. Без них бизнес не выживет, но их ценность измерить нельзя.
      Типичный пример: банки.
   1. Можно оценивать во времени, прошедшем от идеи до внедрения. По английски это называется Lead Time или Time To Market.
      Это работает на однотипных задачах, и перестаёт на разнотипных.
   1. Попугаи. Story Points. Пытались внедрить, в результате отказались. Story Points могут значить настолько разные вещи, что их трудно
      перевести во временные единицы.
   1. Ценность для бизнеса. Business Value. Руководство не готово прикладывать большие усилия для оценки и Business Value
      оказыается в этом случае слишком приблизительной величиной.
   1. Функциональная сложность. Functional Points. Непригодны для предварительной оценки, только по факту. Кроме того, одну задачу можно решить
      сложно и просто.
   1. Частота выпусков. Не подходит, если сложность задач в разных выпусках разная.
   1. Отношение Time Market к залогированному времени работы над задачей. Оказался хороший показатель. Комментарий с места: это отношение
      зависит не только от команды, поэтому требует осторожности.

Резюме: для каждой фичи при работе команды считаем время от идеи до внедрения (Lead Time) и затраченное время работы над фичей (Logged Time).
Делим первое на второе. Эффективность команды растёт, если показатель снижается и приближается к 1.

### Кейс от Павла

Кейс целиком приводить не буду, отмечу ключевые вопросы.

1. **Как распознавать плохого программиста?** Речь не про собеседование, а про работу в команде. Ответ: совместное владение кодом, code review.
   Если программист проблемный, надо переходить на микроменеджмент, хотя в обычной жизни микроменеджмент это плохо.
1. **Как распознать неопытного технического директора?** Ответ: мейлстоуны. Если технический директор выполняет обязательства, взятые на период
   2&ndash;3 месяца, есть шанс, что и в целом выполнит.

### Уровень соискателей и отсутствие адекватных соискателей

Реплика из зала: пришёл в клуб программистов, думал поискать сотрудников. Оказалось, здесь все ищут.

Присутствующие тимлиды и рядовые сотрудники согласились, что вменяемый соискатель даже в Москве большая редкость.
Рынок перегрет, много кандидатов с высокими зарплатными ожиданиями и низким уровнем знаний.

Реплика: А в чём проблема? Два месяца профильного ПТУ, и человек готов к работе.
Втвет: История из реальной жизни. В программе есть маршруты автомобилей, нужно показать на карте, как ехал
автомобиль. Backend передаёт маршрут frontend'у, frontend просит возвращать ещё и координаты центра, чтобы правильно
позиционировать карту. Координаты центра&nbsp;&mdash; это центр прямоугольника, описанного вокруг маршрута,
frontend может их вычислить сам. Налицо профессионально непригодный программист.

### Junior, Middle, Senior

Есть ли объективные критерии для Junior, Middle, Senior. Присутствующие назвать не смогли. Зафиксировали
положение, что таковое разделение это синтетика и условность. Вместо этого правильное обратить внимание
на перечень пожеланий и требований.

### Код

При оценке программистов хороши примеры кода и тестовые задания. Тестовые задания нужны небольшие, чтобы их можно
было выполнить в рамках собеседования. Идеально, когда они из фактической работы, но это трудно организовать.

Чтобы организовать реальные задания, надо в каждой итерации выделять время на обсуждение встретившихся проблем
и отбор интересных решений.
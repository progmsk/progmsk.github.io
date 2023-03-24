---
layout: post
date: 2023-03-21 17:00:00+03:00
title: "ClojureScript"
excerpt: "Серия воркшопров Алексея Пирогова."
image: "https://user-images.githubusercontent.com/10639110/227255927-d5d442cb-deca-4a7e-8ea0-6dbfa01af72f.png"
---

✔️ [Исходный код](https://github.com/astynax/cljs-pokedex)!

На JavaScript можно писать функционально — это не секрет. Язык поддерживает разные парадигмы, и программист волен выбирать между процедурным, объектным и функциональным решением задачи. Кажется, что парадигмы языка совершенно равноправны, но это не так. Синтаксис JavaScript — старый добрый процедурный C, приправленный объектными украшениями, какие мы видели в C++ и Java. Писать на JavaScript процедурный и объектно-ориентированный код — привычнее, идиоматичнее и проще, чем функциональный.

Языки, на которых принято писать преимущественно в функциональном стиле, чаще встречаются на стороне бэкэнда. А вот на чём можно функционально пописать для браузера?

Лет десять с лишним существует язык Clojure, который "живёт" на сервере, где запускается на Java Virtual Machine, а в браузере запускается его более молодое подмножество — ClojureScript. Это тот самый "functional first" язык, где вы практически везде используете чистые функции и неизменяемые структуры данных удовольствия ради и дела для.  

Алексей Пирогов, наш бессменный докладчик и организатор встреч, сделал серию воркшопов, где вживую показал, как выглядит разработка на ClojureScript.
Реализовал работающий в браузере "Pokedex" — базу знаний о… покемонах! Данные получает из PokéAPI (https://pokeapi.co/), кэширует в Localstorage и показывает по ним выборки в GUI. Также кладёт данные в DataScript (https://github.com/tonsky/datascript) — это такая in-memory БД, запросы к которой пишутся на языке логического программирования Datalog (https://docs.racket-lang.org/datalog/) (который является DSL для Clojure, конечно же).

Цикл воркшопов прошёл с 16 февраля по 21 марта.

<div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/WkN5feMXyPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/7XQq1yMlmsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jbIOd7xxls4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/1P69b8I3H1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/lqMEyaPL3Pg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

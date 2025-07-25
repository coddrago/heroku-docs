# Как создавать страницы документации для Heroku Userbot

Это руководство поможет вам легко создавать и форматировать страницы документации, используя готовые стили. Вам нужно будет только знать, какие HTML-теги и CSS-классы использовать.

## Основы создания новой страницы

1.  **Скопируйте существующий HTML-файл**: Возьмите, например, `index.html` или любую другую страницу документации.
2.  **Переименуйте файл**: Дайте ему осмысленное имя, например, `moia-novaia-stranica.html`.
3.  **Измените заголовок страницы**: Внутри тега `<head>`, найдите `<title>...</title>` и измените текст на актуальный для вашей новой страницы.
4.  **Отредактируйте основное содержимое**: Найдите блок `<main class="content"> ... </main>`. Удалите старое содержимое внутри этого блока и напишите свое.
5.  **Добавьте ссылку в навигацию**: Откройте файл `sidebar.html` и добавьте новый пункт `<li><a href="moia-novaia-stranica.html" class="nav-link">Название Моей Страницы</a></li>` в список `<ul>` навигации. Если это подпункт, вложите его в соответствующий `ul.submenu`.

## Основные элементы форматирования

### 1. Заголовки

*   **Главный заголовок страницы** (обычно один на страницу):
    ```html
    <h1>Ваш главный заголовок</h1>
    ```
*   **Подзаголовки разделов**:
    ```html
    <h2>Подзаголовок раздела</h2>
    ```
*   **Под-подзаголовки**:
    ```html
    <h3>Более мелкий подзаголовок</h3>
    ```
    ```html
    <h4>Ещё более мелкий подзаголовок (используйте реже)</h4>
    ```

### 2. Текст и абзацы

*   **Обычный текст / абзац**:
    ```html
    <p>Это обычный абзац текста. Просто пишите текст внутри тега p.</p>
    ```
*   **Списки**:
    *   Нумерованный список:
        ```html
        <ol>
            <li>Первый пункт</li>
            <li>Второй пункт</li>
        </ol>
        ```
    *   Маркированный список:
        ```html
        <ul>
            <li>Один элемент</li>
            <li>Другой элемент</li>
        </ul>
        ```
*   **Ссылки**:
    ```html
    <a href="https://example.com">Текст ссылки</a>
    ```

### 3. Выделение кода

*   **Встроенный код** (для коротких команд, имен переменных и т.д.):
    ```html
    <p>Используйте команду <code>.ping</code> для проверки.</p>
    ```
*   **Блок кода** (для многострочного кода):
    *   Для Python:
        ```html
        <pre><code class="language-python">
        # Ваш Python код здесь
        def hello():
            print("Hello, world!")
        </code></pre>
        ```
    *   Для Bash/командной строки:
        ```html
        <pre><code class="language-bash">
        # Ваши команды здесь
        git clone https://example.com
        cd my-repo
        </code></pre>
        ```
    *   Для других языков, замените `language-python` или `language-bash` на соответствующий язык (например, `language-json`, `language-javascript`).

### 4. Клавиатурный ввод

*   **Для отображения клавиш или команд, которые нужно набрать**:
    ```html
    <p>Нажмите <kbd>Ctrl</kbd> + <kbd>C</kbd> для отмены.</p>
    <p>Введите команду <kbd>python start.py</kbd>.</p>
    ```

### 5. Цитаты и выделенные блоки

*   **Цитата (Blockquote)**:
    ```html
    <blockquote>
        <p>Это важная цитата или мысль, которую стоит выделить.</p>
        <p><strong>Примечание:</strong> Можно использовать <strong>strong</strong> внутри.</p>
    </blockquote>
    ```
*   **Блоки уведомлений (Callouts)**:
    *   **Примечание (Note)**: Для полезных советов или дополнительной информации.
        ```html
        <div class="callout note">
            <strong>Примечание:</strong> Убедитесь, что у вас установлена последняя версия.
            <p>Дополнительный текст здесь, если нужен.</p>
        </div>
        ```
    *   **Предупреждение (Warning)**: Для потенциальных проблем или действий, требующих осторожности.
        ```html
        <div class="callout warning">
            <strong>Внимание:</strong> Неправильная настройка может привести к ошибкам.
        </div>
        ```
    *   **Опасность/Важно (Danger)**: Для критической информации, например, о безопасности.
        ```html
        <div class="callout danger">
            <strong>Важно:</strong> Никогда не делитесь вашим <code>API_HASH</code> или <code>STRING_SESSION</code>!
        </div>
        ```
        Внутри `<strong>` обычно пишут заголовок уведомления, а затем можно добавить `<p>` с основным текстом.

## Пример простой страницы (внутри `<main class="content">`)

```html
<h1>Начало работы</h1>

<p>Добро пожаловать в документацию по UserBot! Это руководство поможет вам быстро начать работу.</p>

<h2>Установка</h2>
<p>Для установки выполните следующие шаги:</p>
<ol>
    <li>Клонируйте репозиторий: <pre><code class="language-bash">git clone https://your-repo-link.git</code></pre></li>
    <li>Перейдите в папку: <pre><code class="language-bash">cd your-repo</code></pre></li>
    <li>Установите зависимости: <pre><code class="language-bash">pip install -r requirements.txt</code></pre></li>
</ol>

<div class="callout note">
    <strong>Совет:</strong> Рекомендуется использовать виртуальное окружение Python.
</div>

<h2>Первый запуск</h2>
<p>Для запуска бота используйте команду <code>python main.py</code>.</p>
<p>Если возникнут проблемы, проверьте раздел <a href="faq.html">FAQ</a>.</p>
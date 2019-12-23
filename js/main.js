$(document).ready(function () {

    // Slider

    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
        });
    }

    if (window.location.href.indexOf('index') > -1) {

        // Posts
        var posts = [
            {
                title: 'Lorem ipsum dolor',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quod optio illo vero dolore nihil corporis excepturi facilis aliquid pariatur blanditiis, iste minus, laboriosam amet velit, incidunt voluptatum nisi, nemo fugiat. Quam quasi itaque quia cumque quibusdam nisi provident minima sunt enim rerum expedita, necessitatibus aspernatur, asperiores ratione pariatur, est blanditiis adipisci saepe. Ipsum saepe adipisci, qui recusandae dolorum molestias!'
        },
            {
                title: 'Lorem ipsum dolor',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quod optio illo vero dolore nihil corporis excepturi facilis aliquid pariatur blanditiis, iste minus, laboriosam amet velit, incidunt voluptatum nisi, nemo fugiat. Quam quasi itaque quia cumque quibusdam nisi provident minima sunt enim rerum expedita, necessitatibus aspernatur, asperiores ratione pariatur, est blanditiis adipisci saepe. Ipsum saepe adipisci, qui recusandae dolorum molestias!'
        },
            {
                title: 'Lorem ipsum dolor',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quod optio illo vero dolore nihil corporis excepturi facilis aliquid pariatur blanditiis, iste minus, laboriosam amet velit, incidunt voluptatum nisi, nemo fugiat. Quam quasi itaque quia cumque quibusdam nisi provident minima sunt enim rerum expedita, necessitatibus aspernatur, asperiores ratione pariatur, est blanditiis adipisci saepe. Ipsum saepe adipisci, qui recusandae dolorum molestias!'
        },
            {
                title: 'Lorem ipsum dolor',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quod optio illo vero dolore nihil corporis excepturi facilis aliquid pariatur blanditiis, iste minus, laboriosam amet velit, incidunt voluptatum nisi, nemo fugiat. Quam quasi itaque quia cumque quibusdam nisi provident minima sunt enim rerum expedita, necessitatibus aspernatur, asperiores ratione pariatur, est blanditiis adipisci saepe. Ipsum saepe adipisci, qui recusandae dolorum molestias!'
        },
            {
                title: 'Lorem ipsum dolor',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quod optio illo vero dolore nihil corporis excepturi facilis aliquid pariatur blanditiis, iste minus, laboriosam amet velit, incidunt voluptatum nisi, nemo fugiat. Quam quasi itaque quia cumque quibusdam nisi provident minima sunt enim rerum expedita, necessitatibus aspernatur, asperiores ratione pariatur, est blanditiis adipisci saepe. Ipsum saepe adipisci, qui recusandae dolorum molestias!'
        },

    ]; // fin del json post

        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="" class="button-more">Leer más</a>
                </article>
`;

            $('#posts').append(post);
        });
    }

    // Selector de tema
    var theme = $('#theme');

    if (sessionStorage.length > 0 && typeof (sessionStorage.tema) != "undefined") {
        theme.attr('href', sessionStorage.tema);
    } else {
        let green = 'css/green.css';
        theme.attr('href', green);
        sessionStorage.tema = green;
    }

    $('#to-green').click(function () {
        let green = 'css/green.css'
        theme.attr('href', green);
        sessionStorage.tema = green;
    });

    $('#to-red').click(function () {
        let red = 'css/red.css';
        theme.attr('href', red);
        sessionStorage.tema = red;
    });

    $('#to-blue').click(function () {
        let blue = 'css/blue.css';
        theme.attr('href', blue);
        sessionStorage.tema = blue;

    });

    // Fin del selector de tema

    // Scroll arriba de la web

    $('.subir').click(function (e) {
        // hace que se ejecute esta funcionalidad
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);

        return false;
    }); // Fin scroll arriba de la web

    //Login Falso

    $('#login form').submit(function () {
        var form_name = $('#name').val();
        sessionStorage.form_name = form_name;
    });

    var form_name = sessionStorage.form_name;

    if (typeof (form_name) != "undefined") {
        var about_parrafo = $('#about p');
        about_parrafo.html('<b>Bienvenido, ' + form_name + '</b>');
        about_parrafo.append('<br><br>');
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
        $('#login').hide();

        $('#logout').click(function () {
            sessionStorage.removeItem('form_name');
            location.reload();

        });
    }

    // Acordeón
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }

    // Reloj
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {
            var reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);
    } // fin reloj

    // Form validate
    if (window.location.href.indexOf('contact') > -1) {
        $("form input[name='date']").datepicker({
            dateFormat: "yy/mm/dd"
        });
        
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToToOnError: true
        });
    }



}) // fin del ready

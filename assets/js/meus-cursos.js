document.addEventListener('DOMContentLoaded', () => {
    let userLogado = JSON.parse(localStorage.getItem('userLogado'));

    if (!userLogado) {
      alert('Você precisa estar logado para acessar os seus cursos.');
      window.location.href = 'login.html';
      return;
    }

    carregarCursos();
  });

  function adicionarAoCursos(idCurso, nomeCurso, precoCurso) {
    let userLogado = JSON.parse(localStorage.getItem('userLogado'));

    if (!userLogado) {
      alert('Você precisa estar logado para acessar os cursos.');
      window.location.href = 'login.html';
      return;
    }

    let meuscursos = JSON.parse(localStorage.getItem('meuscursos')) || [];

    meuscursos.push({
      id: idCurso,
      nome: nomeCurso,
      preco: precoCurso
    });

    localStorage.setItem('meuscursos', JSON.stringify(meuscursos));

    alert('Curso adicionado!');
  }

  function carregarCursos() {
    let meuscursos = JSON.parse(localStorage.getItem('meuscursos')) || [];
    let listaCursos = document.querySelector('#listaCursos');

    listaCursos.innerHTML = '';

if (meuscursos.length === 0) {
    listaCursos.innerHTML = '<p>Você não tem cursos.</p>';
} else {
    meuscursos.forEach((curso, index) => {
        let item = document.createElement('div');
        item.innerHTML = `
            <p>${curso.nome} - R$ ${curso.preco.toFixed(2)}</p>
       ` ;
        console.log(curso,index);
        listaCursos.appendChild(item);
    });
}
}

  function voltaPaginaPrincipal() {
    window.location.href = 'cursos.html';
  }
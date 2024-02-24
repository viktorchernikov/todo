import TaskListBlob from "./components/TaskListBlob"

function App() {
  return (
    <>
      <header id="site-header" class="container-fluid d-flex justify-content-between align-items-center px-4 py-3 shadow-sm">
          <h1>todo.</h1>
          <p class="mb-0">Autor: Viktor Chernikov</p>
      </header>
      <main id="site-content-wrapper" class='d-flex justify-content-center'>
        <div class='container-md px-4 py-4'>
          <div class="input-group mb-4">
            <input type="text" class="form-control px-4 py-3" placeholder="What do you need to do?" aria-label="What do you need to do?" aria-describedby="controls-addtask"/>
            <button id="controls-addtask" class="btn btn-primary px-4" type="button">+</button>
          </div>
          <section id="tasklist-container" class="py-2 rounded-3 shadow-sm">
            <TaskListBlob title="Wiem że nie chcę się już dłużej bać"/>
            <TaskListBlob title="Nie chcę tańczyć do melodii którą znam"/>
            <TaskListBlob title="Jestem wolny już mnie porwał wiatr"/>
          </section>
        </div>
      </main>
    </>
  )
}

export default App

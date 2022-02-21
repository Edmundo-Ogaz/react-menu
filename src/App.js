import Menu from './Menu';

function App( props ) {

  return (
    <!--div style={{ margin: 20 }}>
    <div>
      <div style={{ margin: 20 }}-->
        <Menu
          mode="horizontal"
          // use openTransition for antd
          openAnimation="slide-up"
        />
      <!--/div>
    </div>
  </div-->
  );
}

export default App;

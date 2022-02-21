import PropTypes from 'prop-types';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import 'rc-menu/assets/index.css';

function App( props ) {

  function handleClick(info) {
    console.log(`clicked ${info.key}`);
    console.log(info);
  }
  
  function onOpenChange(value) {
    console.log('onOpenChange', value);
  }

  return (
    <Menu
          onClick={handleClick}
          triggerSubMenuAction={props.triggerSubMenuAction}
          onOpenChange={onOpenChange}
          selectedKeys={['3']}
          mode={props.mode}
          motion={props.openAnimation}
          defaultOpenKeys={props.defaultOpenKeys}
        >
          <SubMenu title={<span className="submenu-title-wrapper">Mantenedores</span>} key="1">
            <MenuItem key="1-1">Comunas</MenuItem>
            <MenuItem key="1-2">Ciudades</MenuItem>
            <MenuItem key="1-3">Regiones</MenuItem>
            <MenuItem key="1-4">Cargos</MenuItem>
            <MenuItem key="1-5">Areas</MenuItem>
            <MenuItem key="1-6">Funcionarios</MenuItem>
            <SubMenu key="1-7"
                title={<span className="submenu-title-wrapper">Submenú Cliente</span>}
            >
                <MenuItem key="1-7-1">Clientes</MenuItem>
                <MenuItem key="1-7-2">Tipo clientes</MenuItem>
            </SubMenu>
            <SubMenu key="1-7"
                title={<span className="submenu-title-wrapper">Submenú Productos</span>}
            >
                <MenuItem key="1-7-1">Familias</MenuItem>
                <MenuItem key="1-7-2">Subfamilias</MenuItem>
                <MenuItem key="1-7-2">Otras caracteristicas</MenuItem>
                <MenuItem key="1-7-2">Productos</MenuItem>
                <MenuItem key="1-7-1">Conceptos técnicos</MenuItem>
                <MenuItem key="1-7-1">Ficha técnica</MenuItem>
                <MenuItem key="1-7-1">Ingredientes</MenuItem>
            </SubMenu>
          </SubMenu>

          <SubMenu
            title={
                <span className="submenu-title-wrapper">offset sub menu 2</span>
            }
            key="4"
            popupOffset={[10, 15]}
            >
          <MenuItem key="4-1">inner inner</MenuItem>
          <Divider/>
          <SubMenu
            key="4-2"
            title={<span className="submenu-title-wrapper">sub menu 1</span>}
          >
            <SubMenu title={<span className="submenu-title-wrapper">sub 4-2-0</span>} key="4-2-0">
              <MenuItem key="4-2-0-1">inner inner</MenuItem>
              <MenuItem key="4-2-0-2">inner inner2</MenuItem>
            </SubMenu>
            <MenuItem key="4-2-1">inn</MenuItem>
            <SubMenu title={<span className="submenu-title-wrapper">sub menu 4</span>} key="4-2-2">
              <MenuItem key="4-2-2-1">inner inner</MenuItem>
              <MenuItem key="4-2-2-2">inner inner2</MenuItem>
            </SubMenu>
            <SubMenu title={<span className="submenu-title-wrapper">sub menu 3</span>} key="4-2-3">
              <MenuItem key="4-2-3-1">inner inner</MenuItem>
              <MenuItem key="4-2-3-2">inner inner2</MenuItem>
            </SubMenu>
          </SubMenu>
        </SubMenu>
          <MenuItem key="2">1</MenuItem>
          <MenuItem key="3">outer</MenuItem>
          <MenuItem key="5" disabled>disabled</MenuItem>
          <MenuItem key="6">outer3</MenuItem>
        </Menu>
  );
}

App.propTypes = {
  mode: PropTypes.string,
  openAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  triggerSubMenuAction: PropTypes.string,
  defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),
  updateChildrenAndOverflowedIndicator: PropTypes.bool,
};

export default App;

/**
 * 路由组件出口文件
 * joeley
 */
import Loadable from 'react-loadable';
import Loading from './widget/Loading';
import BasicTable from './tables/BasicTables';
import AdvancedTable from './tables/AdvancedTables';
import AsynchronousTable from './tables/AsynchronousTable';
import Echarts from './charts/Echarts';
import Recharts from './charts/Recharts';
import Icons from './ui/Icons';
import Buttons from './ui/Buttons';
import Spins from './ui/Spins';
import Modals from './ui/Modals';
import Notifications from './ui/Notifications';
import Tabs from './ui/Tabs';
import Banners from './ui/banners';
import Drags from './ui/Draggable';
import Dashboard from './dashboard/Dashboard';
import Gallery from './ui/Gallery';
import BasicAnimations from './animation/BasicAnimations';
import ExampleAnimations from './animation/ExampleAnimations';
import AuthBasic from './auth/Basic';
import RouterEnter from './auth/RouterEnter';
import Cssmodule from './cssmodule';
import MapUi from './ui/map';
import QueryParams from './extension/QueryParams';
import Visitor from './extension/Visitor';
import MultipleMenu from './extension/MultipleMenu';
import Sub1 from './smenu/Sub1';
import Sub2 from './smenu/Sub2';
import Env from './env';
import User from './user/User';
import ProductAdd from './product/ProudctAdd';
import ProductDelete from './product/ProductDelete';
import Test from './Test'
import AdsDisplay from './display/AdsDisplay'
import MainDisplay from './display/MainDisplay'
import NewDisplay from './display/NewDisplay'
import SwiperDisplay from './display/SwiperDisplay'
import SetProduct from './navigation/SetProduct'
import SetNavigation from './navigation/SetNavigation'



const WysiwygBundle = Loadable({
    // 按需加载富文本配置
    loader: () => import('./ui/Wysiwyg'),
    loading: Loading,
});

export default {
    BasicTable,
    AdvancedTable,
    AsynchronousTable,
    Echarts,
    Recharts,
    Icons,
    Buttons,
    Spins,
    Modals,
    Notifications,
    Tabs,
    Banners,
    Drags,
    Dashboard,
    Gallery,
    BasicAnimations,
    ExampleAnimations,
    AuthBasic,
    RouterEnter,
    WysiwygBundle,
    Cssmodule,
    MapUi,
    QueryParams,
    Visitor,
    MultipleMenu,
    Sub1,
    Sub2,
    Env,
    User,
    ProductAdd,
    ProductDelete,
    Test,
    AdsDisplay,
    SwiperDisplay,
    MainDisplay,
    NewDisplay,
    SetProduct,
    SetNavigation

} as any;

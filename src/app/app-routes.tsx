import { redirect } from 'react-router-dom';
import ChildView from './child-view/child-view';
import ChildView1 from './child-view1/child-view1';
import ChildView2 from './child-view2/child-view2';
import ChildView3 from './child-view3/child-view3';

export const routes = [
  { index: true, loader: () => redirect('child-view') },
  { path: 'child-view', element: <ChildView />, text: 'Child View' },
  { path: 'child-view1', element: <ChildView1 />, text: 'Child View1' },
  { path: 'child-view2', element: <ChildView2 />, text: 'Child View2' },
  { path: 'child-view3', element: <ChildView3 />, text: 'Child View3' }
];

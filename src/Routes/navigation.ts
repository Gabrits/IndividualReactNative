import { navegacao } from './StackRoutes'
import { RootTabParamsList } from './TabsRoutes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends navegacao {}
    interface RootParamList extends RootTabParamsList {}
  }
}
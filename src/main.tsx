import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ApolloProvider} from '@apollo/client'
import { client } from "./api"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}><App /></ApolloProvider>,
)

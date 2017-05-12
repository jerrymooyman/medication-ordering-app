import {Lokka} from 'lokka'
import {Transport} from 'lokka-transport-http'

// import { bff as bffConfig } from '../../config.json'
// const url = `${bff.host}:${bff.port}/graphql`

const client = new Lokka({
  transport: new Transport("http://localhost:4000/graphql")
})

const getMedicationOrdersQuery = `
  query {
    medicationOrders {
      id
      medication {
        name,
        genericName,
        url
      }
      dose
      priority
      patient {
        firstName
        lastName
        age
      }
      requestedBy {
        firstName
        lastName
        role
      }
    }
  }
`

export const getMedicationOrders = () => {
  return client.query(getMedicationOrdersQuery)
}



import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Website Development</td>
            <td>$10,000.00</td>
            <td>Development</td>
            <td>01/01/2021</td>
          </tr>
          <tr>
            <td>Website Development</td>
            <td>$10,000.00</td>
            <td>Development</td>
            <td>01/01/2021</td>
          </tr>
          <tr>
            <td>Website Development</td>
            <td>$10,000.00</td>
            <td>Development</td>
            <td>01/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
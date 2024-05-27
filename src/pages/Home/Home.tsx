import { useState } from 'react'
import Chart from 'react-apexcharts'

import { MainLayout } from '../../layouts/MainLayout'

import {
  Card,
  CardBody,
  CardContent,
  CardTitle,
  CardValue,
  ChartContainer,
  Container,
  IconContainer
} from './Home.styles'

import { ReactComponent as BookIcon } from '../../icons/book.svg'
import { ReactComponent as PageIcon } from '../../icons/page.svg'

export function Home() {
  const [series] = useState([
    {
      name: 'Páginas Lidas',
      data: [14, 10, 20, 14, 22, 31, 14, 20]
    }
  ])

  return (
    <MainLayout>
      <h1>Dashboard</h1>

      <Container>
        <Card>
          <CardBody>
            <CardContent>
              <CardTitle>Livros Lidos</CardTitle>
              <CardValue>12</CardValue>
              <span style={{ fontSize: 14 }}>
                +50% em relação ao ano passado
              </span>
            </CardContent>
            <IconContainer>
              <BookIcon />
            </IconContainer>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <CardContent>
              <CardTitle>Páginas Lidas na Semana</CardTitle>
              <CardValue>84</CardValue>
              <span style={{ fontSize: 14 }}>
                +18% em relação a semana passada
              </span>
            </CardContent>
            <IconContainer>
              <PageIcon />
            </IconContainer>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <CardContent>
              <CardTitle>Média Diária de Páginas</CardTitle>
              <CardValue>14</CardValue>
              <span style={{ fontSize: 14 }}>
                -8% em relação a semana passada
              </span>
            </CardContent>
            <IconContainer>
              <PageIcon />
            </IconContainer>
          </CardBody>
        </Card>

        <ChartContainer>
          <Card>
            <Chart
              options={{
                chart: {
                  type: 'area',
                  height: 350,
                  zoom: {
                    enabled: false
                  },
                  toolbar: {
                    show: false
                  }
                },
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  curve: 'straight'
                },
                title: {
                  text: 'Resumo Semanal de Leitura',
                  align: 'left',
                  style: {
                    fontFamily: 'inherit',
                    fontWeight: '500',
                    fontSize: '16px',
                    color: '#012949'
                  }
                },
                subtitle: {
                  text: 'Páginas lidas por dia',
                  align: 'left',
                  style: {
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    color: '#012949'
                  }
                },
                labels: [
                  '2021-09-19',
                  '2021-09-20',
                  '2021-09-21',
                  '2021-09-22',
                  '2021-09-23',
                  '2021-09-24',
                  '2021-09-25',
                  '2021-09-26'
                ],
                xaxis: {
                  type: 'datetime'
                },
                yaxis: {
                  opposite: true
                },
                legend: {
                  horizontalAlign: 'left'
                },
                colors: ['#6141b0']
              }}
              series={series}
              type="area"
              width="100%"
              height={500}
            />
          </Card>
        </ChartContainer>
      </Container>
    </MainLayout>
  )
}

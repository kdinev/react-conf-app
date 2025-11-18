import { IgrColumn, IgrGrid } from '@infragistics/igniteui-react-grids';
import { IgrList, IgrListItem } from '@infragistics/igniteui-react';
import { useState } from 'react';
import { CustomerDto } from '../models/NorthwindSwagger/customer-dto';
import { useGetCustomerDtoList, useGetOrderDtoList } from '../hooks/northwind-swagger-hooks';
import '@infragistics/igniteui-react-grids/grids/combined.js';
import styles from './child-view3.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function ChildView3() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerDto | undefined>();
  const { northwindSwaggerCustomerDto } = useGetCustomerDtoList();
  const { northwindSwaggerOrderDto } = useGetOrderDtoList(selectedCustomer?.customerId ?? '');

  return (
    <>
      <div className={classes("row-layout child-view-3-container")}>
        <IgrList className={classes("list")}>
          {northwindSwaggerCustomerDto?.map((item) => (
            <div style={{ display: 'contents' }} onClick={() => setSelectedCustomer(item)} key={uuid()}>
              <IgrListItem>
                <div slot="title">{item.companyName}</div>
                <div slot="subtitle">{item.contactName}</div>
                <span slot="end" className={classes("material-icons icon")}>
                  <span>arrow_forward_ios</span>
                </span>
              </IgrListItem>
            </div>
          ))}
        </IgrList>
        <IgrGrid data={northwindSwaggerOrderDto} primaryKey="orderId" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
          <IgrColumn field="orderId" dataType="number" header="orderId" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="customerId" dataType="string" header="customerId" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="employeeId" dataType="number" header="employeeId" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="shipperId" dataType="number" header="shipperId" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="orderDate" dataType="date" header="orderDate" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="requiredDate" dataType="date" header="requiredDate" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="shipVia" dataType="string" header="shipVia" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="freight" dataType="number" header="freight" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="shipName" dataType="string" header="shipName" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="completed" dataType="boolean" header="completed" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="shipAddress.street" dataType="string" header="shipAddress street" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="shipAddress.city" dataType="string" header="shipAddress city" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="shipAddress.region" dataType="string" header="shipAddress region" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="shipAddress.postalCode" dataType="string" header="shipAddress postalCode" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="shipAddress.country" dataType="string" header="shipAddress country" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="shipAddress.phone" dataType="string" header="shipAddress phone" sortable={true} selectable={false}></IgrColumn>
        </IgrGrid>
      </div>
    </>
  );
}

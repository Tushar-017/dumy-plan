export const filterItems = [
  {
    id: 1,
    name: "xyz",
  },
  {
    id: 2,
    name: "xyz",
  },
  {
    id: 3,
    name: "xyz",
  },
  {
    id: 4,
    name: "xyz",
  },
  {
    id: 5,
    name: "xyz",
  },
]

export const cardData = [
  {
    id: 1,
    DataSource: "BQ",
    Rows: "120,020,000",
    Catalog: "spdb-data",
    Updated: "2022-09-15 01:00:00 JST",
    Type: "table",
    quality: "99.99%",
  },
]

export const cardTitle = [
  {
    id: 1,
    title: "mall.shop_tax__daily",
  },
]

export const Filter = [
  {
    id: 1,
    FilterName: "DataSource",
    DefaultV: "bigquery",
  },
  {
    id: 2,
    FilterName: "Catalog",
    DefaultV: "spdb-data",
  },
  {
    id: 3,
    FilterName: "Tags",
    DefaultV: "ecommerce",
  },
  {
    id: 4,
    FilterName: "Domain",
    DefaultV: "sales",
  },
]

export const DetailsData = {
  DataSource: "Bigquery",
  Catalog: "spdb-data",
  Schema: "mall",
  DataOwner: "Jon",
  frequentUsers: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  tags: [
    { name: "ichiba", id: 1 },
    { name: "red-basket", id: 2 },
    { name: "e-commerce", id: 3 },
  ],
  AccessedTimes: 565,
  Domain: "Sales",
  Sla: "9 AM JST",
  Records: "120,020,000",
  Size: "1.2 TB",
  CreatedAt: "2022-01-01 01:00:00 JST",
  UpdatedAt: "2022-09-15 01:00:00 JST",
}

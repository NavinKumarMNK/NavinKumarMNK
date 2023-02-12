#![allow(unused)]
use std::collections::BTreeMap;
use anyhow::{anyhow, Result};
use surrealdb::sql::{thing, Datetime, Object, Thing, Value};
use surrealdb::{Datastore, Response, Session};

type DB = (Datastore, Session);

#[tokio::main]
async fn main() -> Result<()> {
    Ok(())
}
"use client";
import React from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { MdCheckCircleOutline } from "react-icons/md";

export type PricingTableType = {
  heading?: string;
  tableTitle?: string
  plans?: {
    name: string;
    price: string;
  }[];
  features?: {
    label: string;
    availability?: boolean[];
  }[];
};

type SanityPricingTableProps = {
  data?: PricingTableType;
};

const SanityPricingTable: React.FC<SanityPricingTableProps> = ({ data }) => {
  // ✅ Normalize once (TypeScript + runtime safe)
  const plans = data?.plans ?? [];
  const features = data?.features ?? [];

  // ✅ Nothing to render
  if (plans.length === 0 || features.length === 0) {
    return null;
  }

  return (
    <div className="packageTable-container">
      {data?.heading && (
        <div className="packageTable-Head">
          <h2>{data.heading}</h2>
        </div>
      )}

      <table className="packageTable-content">
        <thead>
          <tr>
            {data?.tableTitle && (

              <th>{data.tableTitle}</th>
            )}

            {plans.map((plan, i) => (
              <th key={i}>{plan.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {features.map((feature, fIdx) => (
            <tr key={fIdx}>
              <th>{feature.label}</th>

              {plans.map((_, pIdx) => {
                const value = feature.availability?.[pIdx];
                return (
                  <td key={pIdx}>
                    {value === true ? <MdCheckCircleOutline className="packageTable-checkIco" /> : value === false ? <FaRegCircleXmark className="packageTable-crossIco" /> : "—"}
                  </td>
                );
              })}
            </tr>
          ))}

          <tr>
            <th>Price</th>
            {plans.map((plan, i) => (
              <td key={i}>{plan.price}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SanityPricingTable;

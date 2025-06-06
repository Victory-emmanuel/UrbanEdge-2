import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PropertyMortgageCalculator = ({ propertyPrice }) => {
  const [loanAmount, setLoanAmount] = useState(Math.round(propertyPrice * 0.8));
  const [downPayment, setDownPayment] = useState(
    Math.round(propertyPrice * 0.2),
  );
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Calculate monthly payment whenever inputs change
  useEffect(() => {
    calculateMonthlyPayment();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateMonthlyPayment = () => {
    // Convert annual interest rate to monthly rate and decimal form
    const monthlyRate = interestRate / 100 / 12;
    // Convert loan term from years to months
    const termMonths = loanTerm * 12;

    if (monthlyRate === 0) {
      setMonthlyPayment(loanAmount / termMonths);
    } else {
      // Calculate monthly payment using the formula: P * (r(1+r)^n) / ((1+r)^n - 1)
      const payment =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
        (Math.pow(1 + monthlyRate, termMonths) - 1);

      setMonthlyPayment(payment);
    }
  };

  const handleDownPaymentChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setDownPayment(value);
    setLoanAmount(propertyPrice - value);
  };

  const handleLoanAmountChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setLoanAmount(value);
    setDownPayment(propertyPrice - value);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-brown-dark rounded-lg shadow-lg p-6"
      data-oid="irszsp6"
    >
      <h3
        className="text-xl font-heading font-semibold text-brown-dark dark:text-beige-light mb-6"
        data-oid="dk5da7d"
      >
        Mortgage Calculator
      </h3>

      <div className="space-y-6" data-oid=":6v69nt">
        {/* Property Price (Read-only) */}
        <div data-oid="6ynhp8z">
          <label
            className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
            data-oid="j0bcgep"
          >
            Property Price
          </label>
          <input
            type="text"
            value={formatCurrency(propertyPrice)}
            className="input bg-beige-light dark:bg-brown cursor-not-allowed"
            disabled
            data-oid="a7hxjl1"
          />
        </div>

        {/* Down Payment */}
        <div data-oid="qlvmjnz">
          <label
            htmlFor="downPayment"
            className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
            data-oid="jpv8n2."
          >
            Down Payment
          </label>
          <input
            type="number"
            id="downPayment"
            value={downPayment}
            onChange={handleDownPaymentChange}
            min="0"
            max={propertyPrice}
            step="1000"
            className="input"
            data-oid="c0r0u35"
          />

          <div
            className="mt-2 flex justify-between text-xs text-brown dark:text-beige-medium"
            data-oid="fgiafgf"
          >
            <span data-oid="4ycm3l8">
              {Math.round((downPayment / propertyPrice) * 100)}% of property
              price
            </span>
            <span data-oid="l3urstj">{formatCurrency(downPayment)}</span>
          </div>
        </div>

        {/* Loan Amount */}
        <div data-oid="3sxlyoc">
          <label
            htmlFor="loanAmount"
            className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
            data-oid="0r0swsh"
          >
            Loan Amount
          </label>
          <input
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={handleLoanAmountChange}
            min="0"
            max={propertyPrice}
            step="1000"
            className="input"
            data-oid="txpa7b-"
          />
        </div>

        {/* Interest Rate */}
        <div data-oid="q4m8xx8">
          <label
            htmlFor="interestRate"
            className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
            data-oid="gh9pbad"
          >
            Interest Rate (%)
          </label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
            min="0"
            max="20"
            step="0.1"
            className="input"
            data-oid="bfcrnk0"
          />
        </div>

        {/* Loan Term */}
        <div data-oid="ybkjy6r">
          <label
            htmlFor="loanTerm"
            className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
            data-oid="dr0j0hk"
          >
            Loan Term (years)
          </label>
          <select
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(parseInt(e.target.value))}
            className="input"
            data-oid="yu_x:.n"
          >
            <option value="15" data-oid="f9z7z53">
              15 years
            </option>
            <option value="20" data-oid="2z63d:b">
              20 years
            </option>
            <option value="30" data-oid="jqym_tk">
              30 years
            </option>
          </select>
        </div>

        {/* Results */}
        <div
          className="bg-beige-light dark:bg-brown rounded-lg p-4 text-center"
          data-oid="mwume0r"
        >
          <p
            className="text-sm text-brown dark:text-beige-medium mb-1"
            data-oid="n03_.oj"
          >
            Estimated Monthly Payment
          </p>
          <p
            className="text-2xl font-heading font-bold text-brown-dark dark:text-beige-light"
            data-oid="bb93v99"
          >
            {formatCurrency(monthlyPayment)}
          </p>
          <p
            className="text-xs text-brown dark:text-beige-medium mt-2"
            data-oid="r4by:hw"
          >
            Principal & Interest only. Taxes and insurance not included.
          </p>
        </div>

        {/* Disclaimer */}
        <p
          className="text-xs text-brown dark:text-beige-medium italic"
          data-oid="efkqem6"
        >
          This calculator is for estimation purposes only. Contact a mortgage
          professional for accurate rates and terms.
        </p>
      </div>
    </motion.div>
  );
};

export default PropertyMortgageCalculator;

import React from 'react';
import { useState } from 'react';
import htm from "htm";

const html = htm.bind(React.createElement);

export function BRC(props) {
  const [brcRadioButton, setBrcRadioButton] = useState(props.brcRadioButton);
  const [tokenTicker, setTokenTicker] = useState(props.tokenTicker);
  const [minAmount, setMinAmount] = useState(props.minAmount);
  const [mintLimit, setMintLimit] = useState(props.mintLimit);
  const [tokenSupply, setTokenSupply] = useState(props.tokenSupply);
  const [mintAmount, setMintAmount] = useState(props.mintAmount);
  const [transferAmount, setTransferAmount] = useState(props.transferAmount);
  const [transferTo, setTransferTo] = useState(props.transferTo);

  let handleChange = (e) => {
    console.log(e);
    setBrcRadioButton(e);
  }

  return html`
    <div id="brc-20-input-container">
      <div>
        <h5>Deploy, mint or transfer BRC-20 token.</h5>
      </div>

      <div>
        <label for="token-ticker" required>Ticker</label>
        <input
          id="token-ticker"
          type="text"
          value=${tokenTicker}
          placeholder="Token ticker (max 4 characters)"
          onInput=${(e) => {
            // setFileSize(((e.target.value.length)));
            setTokenTicker(e.target.value);
          }}
        />
      </div>

      <h3>Deploy</h3>
      <div>
        <label for='token-supply' required>
          Total Supply
        </label>
        <input
          type='number'
          id='token-supply'
          value=${tokenSupply}
          onInput=${(e) => {
            setTokenSupply(e.target.value);
          }}
        />
      </div>
      <div>
        <label for='mint-limit' required>
          Limit Per Mint
        </label>
        <input
          type='number'
          id='mint-limit'
          value=${mintLimit}
          onInput=${(e) => {
            setMintLimit(e.target.value);
          }}
        />
      </div>

      <h3>Mint</h3>
      <div>
        <label for='mint-amount' required>
          Amount
        </label>
        <input
          type='number'
          id='mint-amount'
          value=${mintAmount}
          onInput=${(e) => {
            setMintAmount(e.target.value);
          }}
        />
      </div>

      <h3>Transfer</h3>
      <div>
        <label for='transfer-amount' required>
          Amount
        </label>
        <input
          type='number'
          id='transfer-amount'
          value=${transferAmount}
          onInput=${(e) => {
            setTransferAmount(e.target.value);
          }}
        />
      </div>
      <div>
        <label for='transfer-to' required>
          To
        </label>
        <input
          type='text'
          id='transfer-to'
          value=${transferTo}
          onInput=${(e) => {
            setTransferTo(e.target.value);
          }}
        />
      </div>

      <p><a href="https://domo-2.gitbook.io/brc-20-experiment/" target="_blank" rel="noopener noreferrer" >Read more about BRC-20 tokens here</a></p>
    </div>
  `;
}
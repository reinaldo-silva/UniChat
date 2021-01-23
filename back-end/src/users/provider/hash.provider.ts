import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';

Injectable();
export default class HashProvider {
  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return this.compare(password, hashedPassword);
  }
}
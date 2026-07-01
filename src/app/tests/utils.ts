import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

export function getElementByTestId(testId: string, fixture: ComponentFixture<unknown>): DebugElement {
  return fixture.debugElement.query(By.css(`[data-test-id=${testId}]`));
}

export function getAllElementsByTestId(testId: string, fixture: ComponentFixture<unknown>): DebugElement[] {
  return fixture.debugElement.queryAll(By.css(`[data-test-id=${testId}]`));
}

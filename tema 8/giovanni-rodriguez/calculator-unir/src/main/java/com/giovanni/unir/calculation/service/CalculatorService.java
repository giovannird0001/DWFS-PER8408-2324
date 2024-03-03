package com.giovanni.unir.calculation.service;

import java.util.List;

import com.giovanni.unir.calculation.model.Calculation;
import com.giovanni.unir.calculation.model.CalculationDto;

public interface CalculatorService {
    List<Calculation> getAllCalculations();

    Calculation getCalculationById(String id);

    Calculation saveCalculation(CalculationDto calculationDto);
}

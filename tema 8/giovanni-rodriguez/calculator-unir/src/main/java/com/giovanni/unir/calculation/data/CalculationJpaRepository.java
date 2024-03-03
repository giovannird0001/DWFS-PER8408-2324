package com.giovanni.unir.calculation.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.giovanni.unir.calculation.model.Calculation;

public interface CalculationJpaRepository extends JpaRepository<Calculation, Long>, JpaSpecificationExecutor<Calculation> {
}
